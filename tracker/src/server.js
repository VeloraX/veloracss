import http from 'node:http';

import { createTrackerHandler } from './app.js';
import { createAuditLog } from './sync/auditLog.js';
import { createMappingStore } from './sync/mappingStore.js';

const MAX_BODY_SIZE_BYTES = 1024 * 1024;

export function createTrackerServer({
  environment,
  mappingStore = createMappingStore(),
  auditLog = createAuditLog(),
  clock = () => new Date().toISOString()
}) {
  const handler = createTrackerHandler({
    environment,
    mappingStore,
    auditLog,
    clock
  });

  return http.createServer(async (request, response) => {
    try {
      const host = readNodeHeaderValue(request.headers.host) ?? 'localhost';
      const bodyBuffer = await readRequestBody(request);
      const result = await handler({
        method: request.method ?? 'GET',
        url: new URL(request.url ?? '/', `http://${host}`).toString(),
        headers: request.headers,
        bodyBuffer
      });

      sendJson(response, result.statusCode, result.payload);
    } catch (error) {
      sendJson(response, error.statusCode ?? 500, {
        error: 'server_error',
        message: error.message
      });
    }
  });
}

function readNodeHeaderValue(value) {
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return typeof value === 'string' ? value : null;
}

async function readRequestBody(request) {
  const chunks = [];
  let totalBytes = 0;

  for await (const chunk of request) {
    totalBytes += chunk.length;

    if (totalBytes > MAX_BODY_SIZE_BYTES) {
      const error = new Error('Request body exceeded the 1 MB scaffold limit.');
      error.statusCode = 413;
      throw error;
    }

    chunks.push(chunk);
  }

  return Buffer.concat(chunks);
}

function sendJson(response, statusCode, payload) {
  const body = JSON.stringify(payload, null, 2);

  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': Buffer.byteLength(body)
  });

  response.end(body);
}

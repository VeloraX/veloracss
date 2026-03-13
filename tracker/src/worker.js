import { createTrackerHandler } from './app.js';
import { readEnvironment } from './config/env.js';
import { createAuditLog } from './sync/auditLog.js';
import { createMappingStore } from './sync/mappingStore.js';

const MAX_BODY_SIZE_BYTES = 1024 * 1024;
const auditLog = createAuditLog();
const mappingStore = createMappingStore();

export default {
  async fetch(request, env) {
    const bodyBuffer = await readRequestBody(request);
    const environment = readEnvironment(env);
    const handler = createTrackerHandler({
      environment,
      mappingStore,
      auditLog,
      clock: () => new Date().toISOString()
    });
    const result = await handler({
      method: request.method,
      url: request.url,
      headers: request.headers,
      bodyBuffer
    });

    return new Response(JSON.stringify(result.payload, null, 2), {
      status: result.statusCode,
      headers: {
        'content-type': 'application/json; charset=utf-8'
      }
    });
  }
};

async function readRequestBody(request) {
  if (request.method === 'GET' || request.method === 'HEAD') {
    return new Uint8Array();
  }

  const buffer = new Uint8Array(await request.arrayBuffer());

  if (buffer.byteLength > MAX_BODY_SIZE_BYTES) {
    const error = new Error('Request body exceeded the 1 MB scaffold limit.');
    error.statusCode = 413;
    throw error;
  }

  return buffer;
}
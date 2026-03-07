export default function GettingStartedPage() {
  return (
    <main style={{ padding: '2.5rem', maxWidth: '860px', fontFamily: 'system-ui, -apple-system, sans-serif', color: '#e2e8f0' }}>

      {/* Breadcrumb */}
      <p style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '1rem' }}>
        Docs <span style={{ color: '#475569' }}>/</span>{' '}
        <span style={{ color: '#94a3b8' }}>Getting Started</span>
      </p>

      {/* Title */}
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#ffffff',
          margin: '0 0 0.5rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          paddingBottom: '0.6rem',
          borderBottom: '2px solid transparent',
          borderImage: 'linear-gradient(90deg, #7c5cfc, #a87fff) 1',
          display: 'inline-block',
        }}
      >
        Getting Started
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          color: '#94a3b8',
          lineHeight: 1.7,
          marginTop: '1rem',
          marginBottom: '2.5rem',
        }}
      >
        Install VeloraCSS in seconds and start building.
      </p>

      {/* CDN */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          CDN
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          The fastest way to try VeloraCSS is via the CDN. Drop this tag into your{' '}
          <code style={{ fontFamily: 'Consolas, monospace', fontSize: '0.85rem', color: '#a87fff', background: 'rgba(124,92,252,0.1)', padding: '1px 5px', borderRadius: '4px' }}>&lt;head&gt;</code>{' '}
          and you&apos;re ready.
        </p>
        <div
          style={{
            background: '#060b17',
            border: '1px solid #1e2d45',
            borderRadius: '0.625rem',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '0.5rem 1rem',
              background: '#0d1422',
              borderBottom: '1px solid #1e2d45',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                color: '#64748b',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              HTML
            </span>
          </div>
          <pre
            style={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              color: '#94a3b8',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
            }}
          >
            <code>{`<link rel="stylesheet" href="https://unpkg.com/veloracss/dist/velora.min.css">`}</code>
          </pre>
        </div>
      </section>

      {/* npm */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          npm
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Install VeloraCSS as an npm package for use in any build tool or bundler.
        </p>
        <div
          style={{
            background: '#060b17',
            border: '1px solid #1e2d45',
            borderRadius: '0.625rem',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '0.5rem 1rem',
              background: '#0d1422',
              borderBottom: '1px solid #1e2d45',
            }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                color: '#64748b',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Terminal
            </span>
          </div>
          <pre
            style={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              color: '#94a3b8',
              fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
            }}
          >
            <code>npm install veloracss</code>
          </pre>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.82rem', marginTop: '0.75rem', lineHeight: 1.6 }}>
          Then import in your entry CSS or JS:
        </p>
        <div
          style={{
            background: '#060b17',
            border: '1px solid #1e2d45',
            borderRadius: '0.625rem',
            overflow: 'hidden',
            marginTop: '0.5rem',
          }}
        >
          <pre
            style={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.8rem',
              lineHeight: 1.7,
              color: '#94a3b8',
              fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
            }}
          >
            <code>{`@import 'veloracss/dist/velora.css';`}</code>
          </pre>
        </div>
      </section>

      {/* First component */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          Your first component
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Once VeloraCSS is loaded, compose components using{' '}
          <code style={{ fontFamily: 'Consolas, monospace', fontSize: '0.85rem', color: '#a87fff', background: 'rgba(124,92,252,0.1)', padding: '1px 5px', borderRadius: '4px' }}>vel-</code>{' '}
          utility classes. Here&apos;s a card with a button:
        </p>
        <div
          style={{
            background: '#060b17',
            border: '1px solid #1e2d45',
            borderRadius: '0.625rem',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '0.5rem 1rem',
              background: '#0d1422',
              borderBottom: '1px solid #1e2d45',
            }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                color: '#64748b',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              HTML
            </span>
          </div>
          <pre
            style={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.78rem',
              lineHeight: 1.8,
              color: '#94a3b8',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all',
              fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
            }}
          >
            <code>{`<div class="vel-card vel-p-6 vel-max-w-sm">
  <h2 class="vel-text-xl vel-font-semibold vel-mb-2">Hello, VeloraCSS</h2>
  <p class="vel-text-sm vel-text-neutral-500 vel-mb-4">
    Utility-first styling, ready out of the box.
  </p>
  <button class="vel-btn vel-btn-primary">Get started</button>
</div>`}</code>
          </pre>
        </div>
      </section>

      {/* Design tokens */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          Design tokens
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          VeloraCSS exposes its entire design system via CSS custom properties under the{' '}
          <code style={{ fontFamily: 'Consolas, monospace', fontSize: '0.85rem', color: '#a87fff', background: 'rgba(124,92,252,0.1)', padding: '1px 5px', borderRadius: '4px' }}>--vel-</code>{' '}
          namespace. You can reference these in your own CSS to keep your project in sync with the framework.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
            marginBottom: '1.25rem',
          }}
        >
          {[
            { token: '--vel-color-primary', description: 'Brand violet', value: '#7c5cfc' },
            { token: '--vel-color-success', description: 'Success green', value: '#22c55e' },
            { token: '--vel-color-danger', description: 'Danger red', value: '#ef4444' },
            { token: '--vel-color-warning', description: 'Warning amber', value: '#f59e0b' },
            { token: '--vel-space-4', description: '1rem spacing unit', value: '1rem' },
            { token: '--vel-radius-md', description: 'Medium border radius', value: '0.5rem' },
          ].map(({ token, description, value }) => (
            <div
              key={token}
              style={{
                background: '#0d1422',
                border: '1px solid #1e2d45',
                borderRadius: '0.5rem',
                padding: '0.75rem',
              }}
            >
              <code
                style={{
                  fontFamily: "'Fira Code', Consolas, monospace",
                  fontSize: '0.72rem',
                  color: '#a87fff',
                  display: 'block',
                  marginBottom: '0.25rem',
                  wordBreak: 'break-all',
                }}
              >
                {token}
              </code>
              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{description}</span>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.7rem',
                  color: '#475569',
                  fontFamily: 'Consolas, monospace',
                  marginTop: '0.2rem',
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            background: '#060b17',
            border: '1px solid #1e2d45',
            borderRadius: '0.625rem',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              padding: '0.5rem 1rem',
              background: '#0d1422',
              borderBottom: '1px solid #1e2d45',
            }}
          >
            <span
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                color: '#64748b',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              CSS
            </span>
          </div>
          <pre
            style={{
              margin: 0,
              padding: '1rem',
              fontSize: '0.78rem',
              lineHeight: 1.8,
              color: '#94a3b8',
              whiteSpace: 'pre-wrap',
              fontFamily: "'Fira Code', 'Cascadia Code', Consolas, monospace",
            }}
          >
            <code>{`.my-hero {
  background: var(--vel-color-primary);
  padding: var(--vel-space-4);
  border-radius: var(--vel-radius-md);
  color: #fff;
}`}</code>
          </pre>
        </div>
      </section>

      {/* Next steps */}
      <section style={{ marginBottom: '1rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.5rem' }}>
          Next steps
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
          Explore the full reference in the sidebar. Start with Layout and Typography utilities, then dive into the pre-built component classes for faster assembly.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Utility Classes', slug: 'utility-classes' },
            { label: 'Theme Variables', slug: 'theme-variables' },
            { label: 'Colors', slug: 'colors' },
            { label: 'Buttons', slug: 'buttons' },
          ].map(({ label, slug }) => (
            <a
              key={slug}
              href={`/docs/${slug}`}
              style={{
                fontSize: '0.8rem',
                fontWeight: 500,
                padding: '0.4rem 1rem',
                borderRadius: '0.375rem',
                background: 'rgba(124, 92, 252, 0.1)',
                color: '#a87fff',
                border: '1px solid rgba(124, 92, 252, 0.25)',
                textDecoration: 'none',
                transition: 'background 0.12s, border-color 0.12s',
              }}
            >
              {label} →
            </a>
          ))}
        </div>
      </section>

      {/* Edit on GitHub */}
      <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid #1e2d45' }}>
        <a
          href="https://github.com/VeloraX/veloracss"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '0.8rem',
            color: '#64748b',
            textDecoration: 'none',
          }}
        >
          Edit on GitHub →
        </a>
      </div>

    </main>
  )
}

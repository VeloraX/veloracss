'use client'

import { useState } from 'react'
import Link from 'next/link'
import { communityComponents, CommunityComponent } from './_data/components'

// ─── Build-time constants ─────────────────────────────────────────────────────
const IS_PROD   = process.env.NODE_ENV === 'production'
const BASE_PATH = IS_PROD ? '/veloracss' : ''
const DOCS_URL  = '/docs'

// ─── Page styles ─────────────────────────────────────────────────────────────
const PAGE_CSS = `
  .vcom-card {
    background: var(--vel-surface-1);
    border: 1px solid var(--vel-border-base);
    border-radius: 0.75rem;
    overflow: hidden;
    cursor: pointer;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .vcom-card:hover {
    border-color: var(--vel-color-primary);
    box-shadow: 0 0 0 1px var(--vel-color-primary);
  }
  .vcom-filter-btn {
    padding: 0.35rem 0.875rem;
    border-radius: 9999px;
    border: 1px solid var(--vel-border-base);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
    background: transparent;
    color: var(--vel-color-muted);
  }
  .vcom-filter-btn:hover {
    border-color: var(--vel-color-primary);
    color: var(--vel-color-primary);
  }
  .vcom-filter-btn.active {
    background: var(--vel-color-primary);
    color: #fff;
    border-color: var(--vel-color-primary);
  }
  .vcom-copy-btn {
    font-size: 0.75rem;
    font-weight: 600;
    padding: 0.25rem 0.75rem;
    border-radius: 0.375rem;
    cursor: pointer;
    border: 1px solid var(--vel-border-base);
    background: var(--vel-surface-2);
    color: var(--vel-color-muted);
    transition: all 0.15s;
  }
  .vcom-copy-btn:hover {
    border-color: var(--vel-color-primary);
    color: var(--vel-color-primary);
  }
  .vcom-search {
    padding: 0.375rem 0.875rem;
    border-radius: 0.5rem;
    background: var(--vel-surface-2);
    border: 1px solid var(--vel-border-base);
    color: var(--vel-color-text);
    font-size: 0.8rem;
    outline: none;
    min-width: 220px;
    transition: border-color 0.15s;
  }
  .vcom-search:focus {
    border-color: var(--vel-color-primary);
  }
  .vcom-modal-copy-btn {
    padding: 0.4rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    background: var(--vel-color-primary);
    color: #fff;
    border: none;
    font-weight: 600;
    font-size: 0.8rem;
    transition: all 0.15s;
  }
  .vcom-modal-copy-btn.copied {
    background: oklch(65% 0.18 160 / 0.15);
    color: oklch(65% 0.18 160);
  }
  .vcom-nav-link {
    font-size: 0.8125rem;
    color: var(--vel-color-muted);
    text-decoration: none;
    transition: color 0.15s;
  }
  .vcom-nav-link:hover { color: var(--vel-color-text); }
  .vcom-submit-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--vel-color-primary);
    color: #fff;
    padding: 0.5rem 1.25rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.875rem;
    text-decoration: none;
    transition: opacity 0.15s;
  }
  .vcom-submit-btn:hover { opacity: 0.88; }
  .vcom-tag {
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 99px;
    background: var(--vel-surface-2);
    color: var(--vel-color-muted);
    border: 1px solid var(--vel-border-base);
  }
  .vcom-cat-badge {
    font-size: 0.65rem;
    font-weight: 600;
    padding: 1px 7px;
    border-radius: 99px;
    background: oklch(65% 0.21 258 / 0.12);
    color: var(--vel-color-primary);
    border: 1px solid oklch(65% 0.21 258 / 0.25);
    text-transform: capitalize;
    flex-shrink: 0;
  }
  .vcom-preview-wrap {
    height: 200px;
    overflow: hidden;
    position: relative;
    background: var(--vel-surface-0);
    border-bottom: 1px solid var(--vel-border-base);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .vcom-preview-inner {
    transform: scale(0.7);
    transform-origin: center center;
    width: 130%;
    text-align: center;
    pointer-events: none;
  }
`

// ─── Category constants ───────────────────────────────────────────────────────
const CATS = ['all', 'component', 'block', 'layout', 'template'] as const
const CAT_LABELS: Record<string, string> = {
  all: 'All',
  component: 'Components',
  block: 'Blocks',
  layout: 'Layouts',
  template: 'Templates',
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CommunityPage() {
  const [query, setQuery]       = useState('')
  const [category, setCategory] = useState<string>('all')
  const [selected, setSelected] = useState<CommunityComponent | null>(null)
  const [copied, setCopied]     = useState(false)

  const filtered = communityComponents.filter(c => {
    const matchCat = category === 'all' || c.category === category
    const q = query.toLowerCase()
    const matchQ =
      !q ||
      c.title.toLowerCase().includes(q) ||
      c.tags.some(t => t.includes(q)) ||
      c.description.toLowerCase().includes(q)
    return matchCat && matchQ
  })

  const copy = (html: string) => {
    navigator.clipboard.writeText(html).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <div style={{
        minHeight: '100vh',
        background: 'var(--vel-surface-0)',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: 'var(--vel-color-text)',
      }}>

        {/* Nav */}
        <nav style={{
          borderBottom: '1px solid var(--vel-border-base)',
          padding: '0.875rem 2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          background: 'var(--vel-surface-1)',
        }}>
          <Link
            href="/"
            style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--vel-color-text)', textDecoration: 'none', letterSpacing: '-0.02em' }}
          >
            VeloraCSS
          </Link>
          <Link href={DOCS_URL} className="vcom-nav-link">Docs</Link>
          <span style={{ fontSize: '0.8125rem', color: 'var(--vel-color-primary)', fontWeight: 600 }}>Community</span>
          <div style={{ flex: 1 }} />
          <a
            href="https://github.com/VeloraX/veloracss"
            target="_blank"
            rel="noopener noreferrer"
            className="vcom-nav-link"
          >
            GitHub
          </a>
        </nav>

        {/* Main */}
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '3rem 2rem' }}>

          {/* Hero */}
          <div style={{ marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: '2.25rem',
              fontWeight: 800,
              color: 'var(--vel-color-text)',
              margin: '0 0 0.75rem',
              letterSpacing: '-0.03em',
            }}>
              Community Components
            </h1>
            <p style={{
              fontSize: '1.05rem',
              color: 'var(--vel-color-muted)',
              margin: '0 0 1.5rem',
              lineHeight: 1.6,
            }}>
              Ready-to-use blocks and components built with VeloraCSS by the community.
              Copy, paste, and customize.
            </p>
            <a
              href="https://github.com/VeloraX/veloracss/blob/main/community/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="vcom-submit-btn"
            >
              + Submit yours
            </a>
          </div>

          {/* Filters + Search */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', gap: '0.375rem' }}>
              {CATS.map(c => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`vcom-filter-btn${category === c ? ' active' : ''}`}
                >
                  {CAT_LABELS[c]}
                </button>
              ))}
            </div>
            <input
              type="search"
              placeholder="Search components..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="vcom-search"
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--vel-color-muted)', marginLeft: 'auto' }}>
              {filtered.length} {filtered.length === 1 ? 'component' : 'components'}
            </span>
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}>
            {filtered.map(comp => (
              <div
                key={comp.id}
                className="vcom-card"
                onClick={() => setSelected(comp)}
              >
                {/* Mini preview */}
                <div className="vcom-preview-wrap">
                  <div
                    className="vcom-preview-inner"
                    dangerouslySetInnerHTML={{ __html: comp.html }}
                  />
                </div>

                {/* Meta */}
                <div style={{ padding: '1rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '0.5rem',
                    marginBottom: '0.375rem',
                  }}>
                    <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--vel-color-text)' }}>
                      {comp.title}
                    </div>
                    <span className="vcom-cat-badge">{comp.category}</span>
                  </div>
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--vel-color-muted)',
                    marginBottom: '0.875rem',
                    lineHeight: 1.5,
                  }}>
                    {comp.description}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <a
                      href={comp.github ? `https://github.com/${comp.github}` : '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ fontSize: '0.75rem', color: 'var(--vel-color-muted)', textDecoration: 'none' }}
                    >
                      @{comp.author}
                    </a>
                    <button
                      className="vcom-copy-btn"
                      onClick={e => { e.stopPropagation(); copy(comp.html) }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--vel-color-muted)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>&#x1F50D;</div>
              <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>No components found</div>
              <div style={{ fontSize: '0.875rem' }}>Try a different search term or category.</div>
            </div>
          )}
        </div>

        {/* Modal */}
        {selected && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(0,0,0,0.75)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
            }}
            onClick={() => setSelected(null)}
          >
            <div
              style={{
                background: 'var(--vel-surface-1)',
                border: '1px solid var(--vel-border-base)',
                borderRadius: '1rem',
                width: '100%',
                maxWidth: '800px',
                maxHeight: '90vh',
                overflow: 'auto',
              }}
              onClick={e => e.stopPropagation()}
            >
              {/* Modal header */}
              <div style={{
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid var(--vel-border-base)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--vel-color-text)' }}>
                    {selected.title}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--vel-color-muted)', marginTop: '0.125rem' }}>
                    {selected.description}
                  </div>
                </div>
                <button
                  className={`vcom-modal-copy-btn${copied ? ' copied' : ''}`}
                  onClick={() => copy(selected.html)}
                >
                  {copied ? '\u2713 Copied!' : 'Copy Code'}
                </button>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--vel-color-muted)',
                    cursor: 'pointer',
                    fontSize: '1.25rem',
                    lineHeight: 1,
                    padding: '0.25rem',
                  }}
                >
                  &times;
                </button>
              </div>

              {/* Live preview */}
              <div
                style={{
                  padding: '2rem',
                  background: 'var(--vel-surface-0)',
                  borderBottom: '1px solid var(--vel-border-base)',
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
                dangerouslySetInnerHTML={{ __html: selected.html }}
              />

              {/* Code block */}
              <div style={{ padding: '1.25rem 1.5rem' }}>
                <pre style={{
                  margin: 0,
                  padding: '1rem 1.25rem',
                  background: '#0C0C0C',
                  borderRadius: '0.625rem',
                  color: '#CCCCCC',
                  fontSize: '0.775rem',
                  lineHeight: 1.75,
                  fontFamily: "'Cascadia Code', Consolas, monospace",
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-all',
                  overflowX: 'auto',
                  maxHeight: '280px',
                  overflowY: 'auto',
                }}>
                  <code>{selected.html}</code>
                </pre>
              </div>

              {/* Tags */}
              <div style={{
                padding: '0.75rem 1.5rem',
                borderTop: '1px solid var(--vel-border-base)',
                display: 'flex',
                gap: '0.375rem',
                flexWrap: 'wrap',
              }}>
                {selected.tags.map(t => (
                  <span key={t} className="vcom-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

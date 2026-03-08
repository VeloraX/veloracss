'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from '../docs/_components/ThemeToggle'

const IS_PROD = process.env.NODE_ENV === 'production'
const PLAYGROUND_URL = IS_PROD ? 'https://velorax.github.io/veloracss/playground' : 'http://localhost:5173'
const BASE_PATH = IS_PROD ? '/veloracss' : ''

const headerStyles = `
  .vsite-header {
    position: sticky; top: 0; z-index: 50;
    height: 52px;
    background: var(--vel-surface-1);
    border-bottom: 1px solid var(--vel-border-base);
    display: flex; align-items: center;
    padding: 0 1.5rem; gap: 1.5rem;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  }
  .vsite-header-logo {
    display: flex; align-items: center; gap: 0.5rem;
    text-decoration: none; flex-shrink: 0;
  }
  .vsite-header-logo img { height: 24px; width: auto; }
  .vsite-header-sep { flex: 1; }
  .vsite-header-link {
    font-size: 0.82rem; font-weight: 500; color: var(--vel-color-muted);
    text-decoration: none; transition: color 0.12s; white-space: nowrap;
  }
  .vsite-header-link:hover { color: var(--vel-color-text); }
  .vsite-header-link.active { color: var(--vel-color-primary); font-weight: 600; }
  .vsite-header-cta {
    font-size: 0.78rem; font-weight: 600; padding: 0.3rem 0.875rem;
    border-radius: 0.4rem; background: var(--vel-color-primary); color: #fff;
    text-decoration: none; transition: background 0.12s; white-space: nowrap; flex-shrink: 0;
  }
  .vsite-header-cta:hover { background: var(--vel-color-primary-hover); }
`

interface SiteHeaderProps {
  /** Override the default sticky positioning (e.g. for pages with their own layout) */
  variant?: 'default' | 'transparent'
}

export default function SiteHeader({ variant = 'default' }: SiteHeaderProps) {
  const pathname = usePathname()
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: headerStyles }} />
      <header className="vsite-header" style={variant === 'transparent' ? { background: 'transparent', borderBottom: 'none' } : undefined}>
        {/* Logo */}
        <Link href="/" className="vsite-header-logo">
          <img src={`${BASE_PATH}/icon.png`} alt="VeloraCSS" />
        </Link>

        <div className="vsite-header-sep" />

        {/* Nav links */}
        <Link href="/docs" className={`vsite-header-link${isActive('/docs') ? ' active' : ''}`}>Docs</Link>
        <Link href="/community" className={`vsite-header-link${isActive('/community') ? ' active' : ''}`}>Community</Link>
        <a href={PLAYGROUND_URL} target="_blank" rel="noopener noreferrer" className="vsite-header-link">Playground</a>
        <a href="https://github.com/VeloraX/veloracss" target="_blank" rel="noopener noreferrer" className="vsite-header-link">GitHub</a>
        <a href="https://discord.gg/RKmSyudqAv" target="_blank" rel="noopener noreferrer" className="vsite-header-link">Discord</a>

        <ThemeToggle />

        <a href={PLAYGROUND_URL} target="_blank" rel="noopener noreferrer" className="vsite-header-cta">
          Try it live →
        </a>
      </header>
    </>
  )
}

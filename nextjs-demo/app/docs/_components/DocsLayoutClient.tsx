'use client'

import { usePathname } from 'next/navigation'
import DocsSidebar from './DocsSidebar'

export default function DocsLayoutClient() {
  const pathname = usePathname()
  // Extract the last path segment as the current slug
  // e.g. /docs/getting-started -> getting-started
  const segments = pathname.split('/').filter(Boolean)
  const currentSlug = segments[segments.length - 1] ?? ''

  return <DocsSidebar currentSlug={currentSlug} />
}

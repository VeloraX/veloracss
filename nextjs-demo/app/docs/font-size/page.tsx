import DocPage from '../_components/DocPage'

export default function FontSizePage() {
  return (
    <DocPage
      title="Font Size"
      description="Utilities for controlling the font size of an element."
      source="typography.css"
      table={[
        { class: 'vel-text-xs', properties: 'font-size: 0.75rem' },
        { class: 'vel-text-sm', properties: 'font-size: 0.875rem' },
        { class: 'vel-text-base', properties: 'font-size: 1rem' },
        { class: 'vel-text-lg', properties: 'font-size: 1.125rem' },
        { class: 'vel-text-xl', properties: 'font-size: 1.25rem' },
        { class: 'vel-text-2xl', properties: 'font-size: 1.5rem' },
        { class: 'vel-text-3xl', properties: 'font-size: 1.875rem' },
        { class: 'vel-text-4xl', properties: 'font-size: 2.25rem' },
        { class: 'vel-text-5xl', properties: 'font-size: 3rem' },
        { class: 'vel-text-6xl', properties: 'font-size: 3.75rem' },
        { class: 'vel-text-7xl', properties: 'font-size: 4.5rem' },
        { class: 'vel-text-8xl', properties: 'font-size: 6rem' },
        { class: 'vel-text-9xl', properties: 'font-size: 8rem' },
      ]}
    />
  )
}

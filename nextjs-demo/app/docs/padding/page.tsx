import DocPage from '../_components/DocPage'

export default function PaddingPage() {
  return (
    <DocPage
      title="Padding"
      description="Utilities for controlling an element's padding."
      source="spacing.css"
      table={[
        { class: 'vel-p-0', properties: 'padding: 0px' },
        { class: 'vel-p-1', properties: 'padding: 0.25rem' },
        { class: 'vel-p-2', properties: 'padding: 0.5rem' },
        { class: 'vel-p-3', properties: 'padding: 0.75rem' },
        { class: 'vel-p-4', properties: 'padding: 1rem' },
        { class: 'vel-p-5', properties: 'padding: 1.25rem' },
        { class: 'vel-p-6', properties: 'padding: 1.5rem' },
        { class: 'vel-p-8', properties: 'padding: 2rem' },
        { class: 'vel-p-10', properties: 'padding: 2.5rem' },
        { class: 'vel-p-12', properties: 'padding: 3rem' },
        { class: 'vel-p-16', properties: 'padding: 4rem' },
        { class: 'vel-px-4', properties: 'padding-left: 1rem; padding-right: 1rem' },
        { class: 'vel-py-4', properties: 'padding-top: 1rem; padding-bottom: 1rem' },
        { class: 'vel-pt-4', properties: 'padding-top: 1rem' },
        { class: 'vel-pr-4', properties: 'padding-right: 1rem' },
        { class: 'vel-pb-4', properties: 'padding-bottom: 1rem' },
        { class: 'vel-pl-4', properties: 'padding-left: 1rem' },
      ]}
    />
  )
}

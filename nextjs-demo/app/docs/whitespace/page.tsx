import DocPage from '../_components/DocPage'

export default function WhitespacePage() {
  return (
    <DocPage
      title="Whitespace"
      description="Utilities for controlling an element's white-space property."
      source="typography.css"
      table={[
        { class: 'vel-whitespace-normal', properties: 'white-space: normal' },
        { class: 'vel-whitespace-nowrap', properties: 'white-space: nowrap' },
        { class: 'vel-whitespace-pre', properties: 'white-space: pre' },
        { class: 'vel-whitespace-pre-line', properties: 'white-space: pre-line' },
        { class: 'vel-whitespace-pre-wrap', properties: 'white-space: pre-wrap' },
        { class: 'vel-whitespace-break-spaces', properties: 'white-space: break-spaces' },
      ]}
    />
  )
}

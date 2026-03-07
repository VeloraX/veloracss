import DocPage from '../_components/DocPage'

export default function LetterSpacingPage() {
  return (
    <DocPage
      title="Letter Spacing"
      description="Utilities for controlling the tracking (letter spacing) of an element."
      source="typography.css"
      table={[
        { class: 'vel-tracking-tighter', properties: 'letter-spacing: -0.05em' },
        { class: 'vel-tracking-tight', properties: 'letter-spacing: -0.025em' },
        { class: 'vel-tracking-normal', properties: 'letter-spacing: 0em' },
        { class: 'vel-tracking-wide', properties: 'letter-spacing: 0.025em' },
        { class: 'vel-tracking-wider', properties: 'letter-spacing: 0.05em' },
        { class: 'vel-tracking-widest', properties: 'letter-spacing: 0.1em' },
      ]}
    />
  )
}

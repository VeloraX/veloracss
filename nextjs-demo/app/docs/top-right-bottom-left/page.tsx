import DocPage from '../_components/DocPage'

export default function TopRightBottomLeftPage() {
  return (
    <DocPage
      title="Top / Right / Bottom / Left"
      description="Utilities for controlling the placement of positioned elements."
      source="layout.css"
      table={[
        { class: 'vel-inset-0', properties: 'inset: 0px' },
        { class: 'vel-inset-auto', properties: 'inset: auto' },
        { class: 'vel-inset-x-0', properties: 'left: 0px; right: 0px' },
        { class: 'vel-inset-y-0', properties: 'top: 0px; bottom: 0px' },
        { class: 'vel-top-0', properties: 'top: 0px' },
        { class: 'vel-top-auto', properties: 'top: auto' },
        { class: 'vel-right-0', properties: 'right: 0px' },
        { class: 'vel-right-auto', properties: 'right: auto' },
        { class: 'vel-bottom-0', properties: 'bottom: 0px' },
        { class: 'vel-bottom-auto', properties: 'bottom: auto' },
        { class: 'vel-left-0', properties: 'left: 0px' },
        { class: 'vel-left-auto', properties: 'left: auto' },
      ]}
    />
  )
}

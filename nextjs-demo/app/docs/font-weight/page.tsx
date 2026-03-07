import DocPage from '../_components/DocPage'

export default function FontWeightPage() {
  return (
    <DocPage
      title="Font Weight"
      description="Utilities for controlling the font weight of an element."
      source="typography.css"
      table={[
        { class: 'vel-font-thin', properties: 'font-weight: 100' },
        { class: 'vel-font-extralight', properties: 'font-weight: 200' },
        { class: 'vel-font-light', properties: 'font-weight: 300' },
        { class: 'vel-font-normal', properties: 'font-weight: 400' },
        { class: 'vel-font-medium', properties: 'font-weight: 500' },
        { class: 'vel-font-semibold', properties: 'font-weight: 600' },
        { class: 'vel-font-bold', properties: 'font-weight: 700' },
        { class: 'vel-font-extrabold', properties: 'font-weight: 800' },
        { class: 'vel-font-black', properties: 'font-weight: 900' },
      ]}
    />
  )
}

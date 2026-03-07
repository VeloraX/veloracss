import DocPage from '../_components/DocPage'

export default function OrderPage() {
  return (
    <DocPage
      title="Order"
      description="Utilities for controlling the order of flex and grid items."
      source="flexbox.css"
      table={[
        { class: 'vel-order-first', properties: 'order: -9999' },
        { class: 'vel-order-last', properties: 'order: 9999' },
        { class: 'vel-order-none', properties: 'order: 0' },
        { class: 'vel-order-1', properties: 'order: 1' },
        { class: 'vel-order-2', properties: 'order: 2' },
        { class: 'vel-order-3', properties: 'order: 3' },
        { class: 'vel-order-4', properties: 'order: 4' },
        { class: 'vel-order-5', properties: 'order: 5' },
        { class: 'vel-order-6', properties: 'order: 6' },
      ]}
    />
  )
}

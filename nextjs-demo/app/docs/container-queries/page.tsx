import DocPage from '../_components/DocPage'

export default function ContainerQueriesPage() {
  return (
    <DocPage
      title="Container Queries"
      description="Utilities for container-type and @container-aware responsive variants. Components adapt to their own width, not the viewport."
      source="container-queries.css"
      table={[
        { class: 'vel-container-type-inline',  properties: 'container-type: inline-size' },
        { class: 'vel-container-type-size',    properties: 'container-type: size' },
        { class: 'vel-container-type-normal',  properties: 'container-type: normal' },
        { class: 'vel-@sm:{class}',      properties: 'Applies {class} when container ≥ 320px' },
        { class: 'vel-@md:{class}',      properties: 'Applies {class} when container ≥ 480px' },
        { class: 'vel-@lg:{class}',      properties: 'Applies {class} when container ≥ 640px' },
      ]}
      examples={[
        {
          label: 'Resize the container to see layout adapt',
          html: `<div class="vel-container-type-inline" style="resize:horizontal;overflow:auto;min-width:200px;max-width:100%;width:340px;border:1px dashed #1e2d45;border-radius:8px;padding:1px">
  <div class="vel-bg-surface-2 vel-rounded-lg vel-overflow-hidden" style="border:1px solid #1e2d45">
    <div class="vel-flex vel-gap-0" style="flex-direction:column">
      <div style="height:100px;background:var(--vel-color-primary,#7c5cfc);opacity:0.15;display:flex;align-items:center;justify-content:center;font-size:2rem">🖼</div>
      <div class="vel-p-4">
        <div class="vel-text-xs vel-font-bold vel-text-primary" style="text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.25rem">vel-container</div>
        <div class="vel-text-base vel-font-bold vel-mb-2">Adaptive Card</div>
        <div class="vel-text-muted vel-text-sm">This card's layout responds to its own container width, not the viewport. Drag the resize handle.</div>
      </div>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Container-aware grid — columns change at container breakpoints',
          html: `<div class="vel-container-type-inline" style="border:1px solid #1e2d45;border-radius:8px;padding:1rem;resize:horizontal;overflow:auto;min-width:200px;max-width:100%;width:500px">
  <div style="display:grid;grid-template-columns:repeat(1,1fr);gap:0.75rem">
    <div class="vel-bg-primary vel-text-white vel-rounded-md vel-p-3 vel-text-sm vel-font-bold">Item 1</div>
    <div class="vel-bg-primary vel-text-white vel-rounded-md vel-p-3 vel-text-sm vel-font-bold">Item 2</div>
    <div class="vel-bg-primary vel-text-white vel-rounded-md vel-p-3 vel-text-sm vel-font-bold">Item 3</div>
  </div>
  <div class="vel-text-xs vel-text-muted vel-mt-3" style="text-align:center">← Drag to resize. In production, vel-@md:grid-cols-3 switches the grid layout.</div>
</div>`,
        },
      ]}
    />
  )
}

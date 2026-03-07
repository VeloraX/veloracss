import DocPage from '../_components/DocPage'

export default function AccordionPage() {
  return (
    <DocPage
      title="Accordion"
      description="A collapsible content component for grouping related information into expandable sections. Supports open/close state via the vel-open modifier and a flush borderless variant."
      source="components/accordion.css"
      table={[
        { class: 'vel-accordion', properties: 'border, border-radius: xl, overflow: hidden, background: surface-1' },
        { class: 'vel-accordion-item', properties: 'border-bottom between items; last-child removes border' },
        { class: 'vel-accordion-trigger', properties: 'full-width button, flex space-between, hover: surface-2 background' },
        { class: 'vel-accordion-trigger-icon', properties: '1.25rem icon container, transition: transform 200ms; rotates 180deg with .vel-open' },
        { class: 'vel-accordion-content', properties: 'padded content area, color: muted, line-height: relaxed' },
        { class: 'vel-accordion-flush', properties: 'borderless transparent variant; removes outer border and radius' },
      ]}
      examples={[
        {
          label: 'Accordion with one item expanded',
          html: `<div style="padding:24px;background:#060b17;font-family:system-ui,sans-serif;border-radius:12px;">
  <div class="vel-accordion" style="max-width:520px;">
    <div class="vel-accordion-item">
      <button class="vel-accordion-trigger">
        <span>What is VeloraCSS?</span>
        <span class="vel-accordion-trigger-icon vel-open">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
        </span>
      </button>
      <div class="vel-accordion-content">
        VeloraCSS is a fully original utility-first CSS framework with rich component classes. Every class, variable, and token is branded with the <code style="background:rgba(124,92,252,0.15);color:#a87fff;padding:1px 5px;border-radius:4px;">vel-</code> prefix.
      </div>
    </div>
    <div class="vel-accordion-item">
      <button class="vel-accordion-trigger">
        <span>How do I install it?</span>
        <span class="vel-accordion-trigger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
        </span>
      </button>
    </div>
    <div class="vel-accordion-item">
      <button class="vel-accordion-trigger">
        <span>Does it support dark mode?</span>
        <span class="vel-accordion-trigger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
        </span>
      </button>
    </div>
  </div>
</div>`,
        },
        {
          label: 'Flush variant (borderless)',
          html: `<div style="padding:24px;background:#060b17;font-family:system-ui,sans-serif;border-radius:12px;">
  <div class="vel-accordion vel-accordion-flush" style="max-width:520px;">
    <div class="vel-accordion-item">
      <button class="vel-accordion-trigger">
        <span>Flush accordion — no outer border</span>
        <span class="vel-accordion-trigger-icon vel-open">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
        </span>
      </button>
      <div class="vel-accordion-content">
        The flush variant removes the outer border and border-radius, making it blend seamlessly into any section background.
      </div>
    </div>
    <div class="vel-accordion-item">
      <button class="vel-accordion-trigger">
        <span>Another flush item</span>
        <span class="vel-accordion-trigger-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>
        </span>
      </button>
    </div>
  </div>
</div>`,
        },
      ]}
    />
  )
}

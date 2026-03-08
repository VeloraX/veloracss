import DocPage from '../_components/DocPage'

export default function SmartFormsPage() {
  return (
    <DocPage
      title="Smart Forms"
      description="CSS-only form validation using :has() with :valid and :invalid. Labels change color, error messages appear, and borders react — zero JavaScript required."
      source="state-machine.css"
      table={[
        { class: 'vel-smart-form',    properties: 'Form container with CSS validation wired via :has()' },
        { class: 'vel-field',         properties: 'Field group (label + input + hint/error messages)' },
        { class: 'vel-field-label',   properties: 'Label that reacts to validity state' },
        { class: 'vel-field-input',   properties: 'Input with live validity border/ring feedback' },
        { class: 'vel-field-hint',    properties: 'Hint text (hidden when field is touched)' },
        { class: 'vel-field-error',   properties: 'Error message (shown when :invalid)' },
        { class: 'vel-field-ok',      properties: 'Success message (shown when :valid)' },
        { class: 'vel-form-submit', properties: 'Submit button — auto-disabled (opacity 0.5, pointer-events none) when form has invalid inputs' },
      ]}
      examples={[
        {
          label: 'Live validation — type in the fields to see CSS react',
          html: `<form class="vel-smart-form" style="max-width:360px;display:grid;gap:1.25rem">
  <div class="vel-field">
    <label class="vel-field-label" for="sf-name">Full name</label>
    <input class="vel-field-input" type="text" id="sf-name" placeholder="Jane Smith" minlength="2" required />
    <span class="vel-field-hint">At least 2 characters</span>
    <span class="vel-field-error">Name must be at least 2 characters</span>
    <span class="vel-field-ok">Looks good!</span>
  </div>
  <div class="vel-field">
    <label class="vel-field-label" for="sf-email">Email address</label>
    <input class="vel-field-input" type="email" id="sf-email" placeholder="jane@example.com" required />
    <span class="vel-field-hint">We'll never share your email</span>
    <span class="vel-field-error">Enter a valid email address</span>
    <span class="vel-field-ok">Valid email!</span>
  </div>
  <button type="submit" class="vel-btn vel-btn-primary">Submit</button>
</form>`,
        },
        {
          label: 'Required field — border turns red when left empty and touched',
          html: `<form class="vel-smart-form" style="max-width:360px;display:grid;gap:1rem">
  <div class="vel-field">
    <label class="vel-field-label" for="sf-url">Website URL</label>
    <input class="vel-field-input" type="url" id="sf-url" placeholder="https://example.com" required />
    <span class="vel-field-hint">Include https://</span>
    <span class="vel-field-error">Enter a valid URL starting with https://</span>
    <span class="vel-field-ok">Valid URL!</span>
  </div>
</form>`,
        },
      ]}
    />
  )
}

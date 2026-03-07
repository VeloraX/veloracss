import DocPage from '../_components/DocPage'

export default function ChatBubblePage() {
  return (
    <DocPage
      title="Chat Bubble"
      description="A messaging UI component for rendering chat conversations. Supports left-aligned (received) and right-aligned (sent) messages with avatars, headers, footers, and color-coded bubble variants."
      source="components/chat-bubble.css"
      table={[
        { class: 'vel-chat', properties: 'flex column container, gap between messages' },
        { class: 'vel-chat-start', properties: 'left-aligned message row (flex row, items at flex-start)' },
        { class: 'vel-chat-end', properties: 'right-aligned message row (flex row-reverse, items at flex-end)' },
        { class: 'vel-chat-avatar', properties: '2rem circle avatar — surface-3 bg, border, centered initials or image' },
        { class: 'vel-chat-meta', properties: 'flex column wrapper for header, bubble, footer; max-width: 70%' },
        { class: 'vel-chat-header', properties: 'xs muted text label above bubble' },
        { class: 'vel-chat-footer', properties: 'xs muted text label below bubble (e.g. timestamp, read receipt)' },
        { class: 'vel-chat-bubble', properties: 'the message bubble — surface-3 bg, border, rounded corners per alignment' },
        { class: 'vel-chat-bubble-primary', properties: 'gradient purple bubble for sent messages' },
        { class: 'vel-chat-bubble-success', properties: 'green tint bubble variant' },
        { class: 'vel-chat-bubble-info', properties: 'cyan tint bubble variant' },
        { class: 'vel-chat-bubble-danger', properties: 'red tint bubble variant' },
      ]}
      examples={[
        {
          label: 'Chat conversation',
          html: `<div style="padding:24px;background:#060b17;font-family:system-ui,sans-serif;border-radius:12px;">
  <div class="vel-chat" style="max-width:480px;">

    <!-- Received message -->
    <div class="vel-chat-start">
      <div class="vel-chat-avatar">AK</div>
      <div class="vel-chat-meta">
        <div class="vel-chat-header">Alex · 2:41 PM</div>
        <div class="vel-chat-bubble">
          Hey! Have you tried VeloraCSS yet? The new chat component looks great.
        </div>
      </div>
    </div>

    <!-- Sent message -->
    <div class="vel-chat-end">
      <div class="vel-chat-meta">
        <div class="vel-chat-bubble vel-chat-bubble-primary">
          Just started using it — the utility classes are super clean.
        </div>
        <div class="vel-chat-footer">Delivered ✓</div>
      </div>
      <div class="vel-chat-avatar" style="background:#7c5cfc;color:#fff;border:none;">Y</div>
    </div>

    <!-- Received info bubble -->
    <div class="vel-chat-start">
      <div class="vel-chat-avatar">AK</div>
      <div class="vel-chat-meta">
        <div class="vel-chat-bubble vel-chat-bubble-info">
          Check out the pricing component too — the featured card glow is nice.
        </div>
        <div class="vel-chat-footer">3:05 PM</div>
      </div>
    </div>

  </div>
</div>`,
        },
      ]}
    />
  )
}

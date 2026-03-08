export interface CommunityComponent {
  id: string
  title: string
  description: string
  author: string
  github?: string
  category: 'component' | 'block' | 'layout' | 'template'
  tags: string[]
  html: string
}

export const communityComponents: CommunityComponent[] = [
  {
    id: 'pricing-card',
    title: 'Pricing Card',
    description: 'A clean pricing card with feature list and CTA button.',
    author: 'VeloraX',
    github: 'VeloraX',
    category: 'block',
    tags: ['pricing', 'marketing', 'card'],
    html: `<div class="vel-card vel-p-6" style="max-width:320px">
  <div class="vel-text-xs vel-font-bold vel-text-primary vel-mb-1" style="text-transform:uppercase;letter-spacing:0.1em">Pro Plan</div>
  <div class="vel-flex vel-items-end vel-gap-1 vel-mb-4">
    <span style="font-size:2.5rem;font-weight:800;color:var(--vel-color-text);line-height:1">$49</span>
    <span class="vel-text-muted vel-text-sm vel-mb-1">/month</span>
  </div>
  <ul style="list-style:none;padding:0;margin:0 0 1.5rem;display:flex;flex-direction:column;gap:0.625rem">
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm"><span style="color:var(--vel-color-success)">&#x2713;</span> Unlimited projects</li>
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm"><span style="color:var(--vel-color-success)">&#x2713;</span> 50GB storage</li>
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm"><span style="color:var(--vel-color-success)">&#x2713;</span> Priority support</li>
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm"><span style="color:var(--vel-color-success)">&#x2713;</span> Custom domains</li>
    <li class="vel-flex vel-items-center vel-gap-2 vel-text-sm vel-text-muted"><span>&#x2717;</span> White-label</li>
  </ul>
  <button class="vel-btn vel-btn-primary vel-btn-block">Get Started</button>
</div>`,
  },
  {
    id: 'stat-dashboard',
    title: 'Stat Dashboard Row',
    description: 'Four KPI cards in a responsive grid — perfect for dashboards.',
    author: 'VeloraX',
    github: 'VeloraX',
    category: 'block',
    tags: ['dashboard', 'stats', 'grid', 'kpi'],
    html: `<div class="vel-grid vel-gap-4" style="grid-template-columns:repeat(auto-fit,minmax(160px,1fr))">
  <div class="vel-card vel-p-4">
    <div class="vel-text-xs vel-text-muted vel-mb-1">Total Revenue</div>
    <div style="font-size:1.75rem;font-weight:800;color:var(--vel-color-text);line-height:1">$84.2k</div>
    <div class="vel-text-xs vel-mt-1" style="color:var(--vel-color-success)">&#x2191; 12.5% this month</div>
  </div>
  <div class="vel-card vel-p-4">
    <div class="vel-text-xs vel-text-muted vel-mb-1">Active Users</div>
    <div style="font-size:1.75rem;font-weight:800;color:var(--vel-color-text);line-height:1">3,421</div>
    <div class="vel-text-xs vel-mt-1" style="color:var(--vel-color-success)">&#x2191; 8.1% this month</div>
  </div>
  <div class="vel-card vel-p-4">
    <div class="vel-text-xs vel-text-muted vel-mb-1">Conversion</div>
    <div style="font-size:1.75rem;font-weight:800;color:var(--vel-color-text);line-height:1">4.7%</div>
    <div class="vel-text-xs vel-mt-1" style="color:var(--vel-color-danger)">&#x2193; 0.3% this month</div>
  </div>
  <div class="vel-card vel-p-4">
    <div class="vel-text-xs vel-text-muted vel-mb-1">Churn Rate</div>
    <div style="font-size:1.75rem;font-weight:800;color:var(--vel-color-text);line-height:1">1.2%</div>
    <div class="vel-text-xs vel-mt-1" style="color:var(--vel-color-success)">&#x2193; 0.4% (good)</div>
  </div>
</div>`,
  },
  {
    id: 'testimonial-card',
    title: 'Testimonial Card',
    description: 'A quote card with avatar, name, and role. Great for social proof.',
    author: 'VeloraX',
    github: 'VeloraX',
    category: 'component',
    tags: ['testimonial', 'quote', 'social-proof'],
    html: `<div class="vel-card vel-p-6" style="max-width:380px">
  <div class="vel-flex vel-gap-1 vel-mb-4" style="color:oklch(72% 0.19 75)">
    &#x2605;&#x2605;&#x2605;&#x2605;&#x2605;
  </div>
  <p class="vel-text-sm vel-mb-4" style="line-height:1.7;color:var(--vel-color-text)">"VeloraCSS is exactly what I was looking for — full component library, smart color system, and zero JavaScript overhead. Migrated our design system in a weekend."</p>
  <div class="vel-flex vel-items-center vel-gap-3">
    <div class="vel-avatar vel-avatar-md">SJ</div>
    <div>
      <div class="vel-text-sm vel-font-bold">Sarah Johnson</div>
      <div class="vel-text-xs vel-text-muted">Lead Designer at Acme Corp</div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'newsletter-signup',
    title: 'Newsletter Signup',
    description: 'Email capture block with validation state using vel-field system.',
    author: 'VeloraX',
    github: 'VeloraX',
    category: 'block',
    tags: ['newsletter', 'form', 'email', 'cta'],
    html: `<div class="vel-card vel-p-8" style="max-width:480px;text-align:center">
  <div style="font-size:2rem;margin-bottom:0.75rem">&#x2709;&#xFE0F;</div>
  <h2 class="vel-font-bold vel-mb-2" style="font-size:1.375rem;color:var(--vel-color-text)">Stay in the loop</h2>
  <p class="vel-text-sm vel-text-muted vel-mb-6">Get the latest VeloraCSS updates, component drops, and CSS tips &#x2014; no spam, ever.</p>
  <form class="vel-smart-form" style="display:flex;flex-direction:column;gap:0.75rem">
    <div class="vel-field">
      <input class="vel-field-input" type="email" required placeholder=" " />
      <span class="vel-field-error">Please enter a valid email address.</span>
      <span class="vel-field-ok">Looks good!</span>
    </div>
    <button class="vel-btn vel-btn-primary vel-btn-block vel-form-submit" type="submit">Subscribe &#x2192;</button>
  </form>
  <p class="vel-text-xs vel-text-muted vel-mt-4">Join 1,200+ developers. Unsubscribe anytime.</p>
</div>`,
  },
  {
    id: 'feature-grid',
    title: 'Feature Grid',
    description: 'Six-feature marketing grid with icons, titles, and descriptions.',
    author: 'VeloraX',
    github: 'VeloraX',
    category: 'block',
    tags: ['features', 'marketing', 'grid', 'landing'],
    html: `<div class="vel-grid vel-gap-4" style="grid-template-columns:repeat(auto-fit,minmax(200px,1fr))">
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x26A1;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Instant Preview</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">See changes live as you type with zero build step required.</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F3A8;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Color Genetics</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">One hue token drives your entire palette via oklch().</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F4E6;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Zero JS</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">Tabs, toggles, and forms need no JavaScript at all.</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F527;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Configurable</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">Override any token via velora.config.js at build time.</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F4F1;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Responsive</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">vel-sm: vel-md: vel-lg: variants on every utility class.</div>
  </div>
  <div class="vel-card vel-p-5">
    <div style="font-size:1.75rem;margin-bottom:0.75rem">&#x1F319;</div>
    <div class="vel-font-bold vel-mb-1 vel-text-sm">Dark + Light</div>
    <div class="vel-text-xs vel-text-muted" style="line-height:1.6">data-vel-mode="light" flips your entire color system.</div>
  </div>
</div>`,
  },
  {
    id: 'profile-card',
    title: 'Profile Card',
    description: 'User profile card with avatar, bio, stats, and action buttons.',
    author: 'VeloraX',
    github: 'VeloraX',
    category: 'component',
    tags: ['profile', 'user', 'card', 'social'],
    html: `<div class="vel-card vel-p-6" style="max-width:300px;text-align:center">
  <div class="vel-avatar vel-avatar-xl vel-mx-auto vel-mb-3">AK</div>
  <div class="vel-font-bold vel-mb-0.5" style="font-size:1.125rem">Alex Kim</div>
  <div class="vel-text-xs vel-text-muted vel-mb-3">Frontend Engineer &#xB7; San Francisco</div>
  <div class="vel-flex vel-gap-3 vel-justify-center vel-mb-4">
    <span class="vel-badge vel-badge-primary">React</span>
    <span class="vel-badge vel-badge-secondary">CSS</span>
    <span class="vel-badge">TypeScript</span>
  </div>
  <div class="vel-flex vel-gap-0 vel-mb-5" style="border:1px solid var(--vel-border-base);border-radius:0.5rem;overflow:hidden">
    <div style="flex:1;padding:0.625rem;text-align:center;border-right:1px solid var(--vel-border-base)">
      <div class="vel-font-bold vel-text-sm">248</div>
      <div class="vel-text-xs vel-text-muted">Posts</div>
    </div>
    <div style="flex:1;padding:0.625rem;text-align:center;border-right:1px solid var(--vel-border-base)">
      <div class="vel-font-bold vel-text-sm">12.4k</div>
      <div class="vel-text-xs vel-text-muted">Followers</div>
    </div>
    <div style="flex:1;padding:0.625rem;text-align:center">
      <div class="vel-font-bold vel-text-sm">891</div>
      <div class="vel-text-xs vel-text-muted">Following</div>
    </div>
  </div>
  <div class="vel-flex vel-gap-2">
    <button class="vel-btn vel-btn-primary vel-btn-sm" style="flex:1">Follow</button>
    <button class="vel-btn vel-btn-secondary vel-btn-sm" style="flex:1">Message</button>
  </div>
</div>`,
  },
  {
    id: 'notification-stack',
    title: 'Notification Stack',
    description: 'Three alert variants stacked — info, success, and warning.',
    author: 'VeloraX',
    github: 'VeloraX',
    category: 'component',
    tags: ['alerts', 'notifications', 'feedback'],
    html: `<div class="vel-flex vel-flex-col vel-gap-3" style="max-width:420px">
  <div class="vel-alert vel-alert-info vel-flex vel-items-start vel-gap-3">
    <span style="font-size:1rem;flex-shrink:0;margin-top:1px">&#x2139;&#xFE0F;</span>
    <div>
      <div class="vel-font-bold vel-text-sm vel-mb-0.5">Heads up</div>
      <div class="vel-text-xs">Your trial ends in 3 days. Upgrade to keep access to all features.</div>
    </div>
  </div>
  <div class="vel-alert vel-alert-success vel-flex vel-items-start vel-gap-3">
    <span style="font-size:1rem;flex-shrink:0;margin-top:1px">&#x2705;</span>
    <div>
      <div class="vel-font-bold vel-text-sm vel-mb-0.5">Deployment complete</div>
      <div class="vel-text-xs">Your app was deployed to production in 12 seconds.</div>
    </div>
  </div>
  <div class="vel-alert vel-alert-warning vel-flex vel-items-start vel-gap-3">
    <span style="font-size:1rem;flex-shrink:0;margin-top:1px">&#x26A0;&#xFE0F;</span>
    <div>
      <div class="vel-font-bold vel-text-sm vel-mb-0.5">Storage at 87%</div>
      <div class="vel-text-xs">You are running low on storage. Delete unused assets or upgrade.</div>
    </div>
  </div>
</div>`,
  },
  {
    id: 'kanban-card',
    title: 'Kanban Task Card',
    description: 'A task card with priority badge, assignee avatar, and progress bar.',
    author: 'VeloraX',
    github: 'VeloraX',
    category: 'component',
    tags: ['kanban', 'task', 'project', 'dashboard'],
    html: `<div class="vel-card vel-p-4" style="max-width:300px">
  <div class="vel-flex vel-items-center vel-justify-between vel-mb-3">
    <span class="vel-badge vel-badge-danger" style="font-size:0.65rem">High Priority</span>
    <span class="vel-text-xs vel-text-muted">Due Mar 15</span>
  </div>
  <div class="vel-font-bold vel-text-sm vel-mb-1">Redesign onboarding flow</div>
  <div class="vel-text-xs vel-text-muted vel-mb-3" style="line-height:1.5">Update the first-run experience with the new design system tokens and component library.</div>
  <div class="vel-mb-3">
    <div class="vel-flex vel-justify-between vel-text-xs vel-mb-1">
      <span class="vel-text-muted">Progress</span>
      <span class="vel-font-bold">72%</span>
    </div>
    <div class="vel-progress"><div class="vel-progress-bar" style="width:72%"></div></div>
  </div>
  <div class="vel-flex vel-items-center vel-justify-between">
    <div class="vel-flex vel-gap-1">
      <div class="vel-avatar" style="width:24px;height:24px;font-size:0.6rem">AK</div>
      <div class="vel-avatar" style="width:24px;height:24px;font-size:0.6rem">SJ</div>
      <div class="vel-avatar" style="width:24px;height:24px;font-size:0.6rem">+2</div>
    </div>
    <div class="vel-flex vel-gap-2 vel-text-xs vel-text-muted">
      <span>&#x1F4AC; 4</span>
      <span>&#x1F4CE; 2</span>
    </div>
  </div>
</div>`,
  },
]

function resolveTarget(trigger, attributeName) {
  const targetId = trigger.getAttribute(attributeName);

  if (!targetId) {
    return null;
  }

  return document.getElementById(targetId);
}

function hideTarget(target) {
  target.setAttribute("hidden", "");
}

function showTarget(target) {
  target.removeAttribute("hidden");
}

function bindToggle(trigger) {
  if (trigger.dataset.velBoundToggle === "true") {
    return;
  }

  const target = resolveTarget(trigger, "data-vel-toggle");

  if (!target) {
    return;
  }

  trigger.dataset.velBoundToggle = "true";

  trigger.addEventListener("click", () => {
    const nextHidden = !target.hasAttribute("hidden");
    target.toggleAttribute("hidden", nextHidden);
    trigger.setAttribute("aria-expanded", String(!nextHidden));
  });
}

function bindOpen(trigger) {
  if (trigger.dataset.velBoundOpen === "true") {
    return;
  }

  const target = resolveTarget(trigger, "data-vel-open");

  if (!target) {
    return;
  }

  trigger.dataset.velBoundOpen = "true";

  trigger.addEventListener("click", () => {
    showTarget(target);
    trigger.setAttribute("aria-expanded", "true");
  });
}

function bindClose(trigger) {
  if (trigger.dataset.velBoundClose === "true") {
    return;
  }

  const target = resolveTarget(trigger, "data-vel-close");

  if (!target) {
    return;
  }

  trigger.dataset.velBoundClose = "true";

  trigger.addEventListener("click", () => {
    hideTarget(target);
  });
}

function bindEscape(root) {
  if (root !== document || document.documentElement.dataset.velEscapeBound === "true") {
    return;
  }

  document.documentElement.dataset.velEscapeBound = "true";

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
      return;
    }

    document.querySelectorAll(".vel-modal:not([hidden]), .vel-toast-stack:not([hidden]), .vel-dropdown-menu:not([hidden])").forEach(hideTarget);
  });
}

export function initVelora(root = document) {
  root.querySelectorAll("[data-vel-toggle]").forEach(bindToggle);
  root.querySelectorAll("[data-vel-open]").forEach(bindOpen);
  root.querySelectorAll("[data-vel-close]").forEach(bindClose);
  bindEscape(root);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initVelora());
  } else {
    initVelora();
  }
}

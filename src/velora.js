function bindToggle(trigger) {
  const targetId = trigger.getAttribute("data-vel-toggle");

  if (!targetId || trigger.dataset.velBound === "true") {
    return;
  }

  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  trigger.dataset.velBound = "true";

  trigger.addEventListener("click", () => {
    const nextHidden = !target.hasAttribute("hidden");
    target.toggleAttribute("hidden", nextHidden);
    trigger.setAttribute("aria-expanded", String(!nextHidden));
  });
}

export function initVelora(root = document) {
  root.querySelectorAll("[data-vel-toggle]").forEach(bindToggle);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initVelora());
  } else {
    initVelora();
  }
}

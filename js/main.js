/*
 * Clarity - UI helpers
 * Lightweight enhancements for accessibility and UX.
 */

"use strict";

// Keep the active nav item synced with scroll position (Bootstrap scrollspy)
const scrollSpyTarget = document.body.getAttribute("data-bs-target");
if (scrollSpyTarget) {
  const spyTarget = document.querySelector(scrollSpyTarget);
  if (spyTarget) {
    new bootstrap.ScrollSpy(document.body, {
      target: scrollSpyTarget,
      offset: 120,
    });
  }
}

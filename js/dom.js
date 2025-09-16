// dom.js - Reusable DOM utilities

// Shortcut to create elements with classes
export function createElement(tag, className = "", content = "") {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (content) el.textContent = content;
  return el;
}

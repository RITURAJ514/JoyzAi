// dragdrop.js - Handles drag & drop
import { updateTaskStatus } from "./tasks.js";

export function initDragDrop() {
  const columns = document.querySelectorAll(".task-list");

  let draggedId = null;

  document.addEventListener("dragstart", e => {
    if (e.target.classList.contains("task")) {
      draggedId = e.target.dataset.id;
    }
  });

  columns.forEach(col => {
    col.addEventListener("dragover", e => {
      e.preventDefault();
    });

    col.addEventListener("drop", e => {
      e.preventDefault();
      if (draggedId) {
        const newStatus = col.id;
        updateTaskStatus(draggedId, newStatus);
        draggedId = null;
      }
    });
  });
}

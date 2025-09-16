// main.js - Entry point
import { addTask, renderTasks } from "./tasks.js";
import { initDragDrop } from "./dragdrop.js";

// Initialize with error handling
try {
    console.log('Initializing Kanban board...');
    renderTasks();
    initDragDrop();
    console.log('Kanban board initialized successfully');
} catch (error) {
    console.error('Failed to initialize:', error);
}

// Handle form submission
document.getElementById("task-form").addEventListener("submit", e => {
  e.preventDefault();
  const title = document.getElementById("task-title").value.trim();
  const desc = document.getElementById("task-desc").value.trim();

  if (title && desc) {
    addTask(title, desc);
    e.target.reset();
  }
});

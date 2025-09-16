// tasks.js - Task creation & rendering
import { createElement } from "./dom.js";
import { saveTasks, loadTasks } from "./storage.js";

let tasks = loadTasks(); // Load persisted tasks

// Generate task DOM card
export function createTaskElement(task) {
  const card = createElement("div", "task");
  card.setAttribute("draggable", "true");
  card.dataset.id = task.id;

  const title = createElement("h3", "", task.title);
  const desc = createElement("p", "", task.description);

  card.append(title, desc);
  return card;
}

// Render all tasks into their respective columns
export function renderTasks() {
  ["todo", "inprogress", "done"].forEach(status => {
    const list = document.getElementById(status);
    list.innerHTML = "";
    tasks.filter(t => t.status === status)
         .forEach(task => list.appendChild(createTaskElement(task)));
  });
}

// Add new task
export function addTask(title, description) {
  const newTask = {
    id: Date.now().toString(),
    title,
    description,
    status: "todo"
  };
  tasks.push(newTask);
  saveTasks(tasks);
  renderTasks();
}

// Update task status after drag-drop
export function updateTaskStatus(id, newStatus) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, status: newStatus } : task
  );
  saveTasks(tasks);
  renderTasks();
}

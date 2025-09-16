// storage.js - Wrapper for localStorage
const STORAGE_KEY = "kanban-tasks";

export function saveTasks(tasks) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        console.log('Tasks saved successfully');
    } catch (error) {
        console.error('Error saving tasks:', error);
        alert('Failed to save tasks. Please make sure localStorage is enabled in your browser.');
    }
}

export function loadTasks() {
    try {
        const tasksJson = localStorage.getItem(STORAGE_KEY);
        if (!tasksJson) {
            console.log('No tasks found in storage, starting with empty list');
            return [];
        }
        const tasks = JSON.parse(tasksJson);
        console.log(`Loaded ${tasks.length} tasks from storage`);
        return tasks;
    } catch (error) {
        console.error('Error loading tasks:', error);
        alert('Failed to load tasks. Starting with empty list.');
        return [];
    }
}

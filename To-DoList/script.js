const form = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Carrega tarefas do localStorage ao iniciar
window.addEventListener('DOMContentLoaded', loadTasks);

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    addTask(task);
    taskInput.value = '';
    saveTasks();
  }
});

function addTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    ${taskText}
    <button class="remove-btn">Remover</button>
  `;
  li.querySelector('.remove-btn').addEventListener('click', () => {
    li.remove();
    saveTasks();
  });
  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#task-list li').forEach(li => {
    tasks.push(li.firstChild.textContent.trim());
  });
  localStorage.setItem('tarefas', JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem('tarefas')) || [];
  savedTasks.forEach(task => addTask(task));
}

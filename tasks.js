const user = localStorage.getItem("loggedUser");

// proteção de rota
if (!user) {
  alert("Você precisa estar logado!");
  window.location.href = "index.html";
}

// mostra usuário
document.getElementById("welcome").innerText =
  "Bem-vindo, " + user;

// carregar tarefas
let tasks = JSON.parse(localStorage.getItem(user + "_tasks")) || [];

renderTasks();

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value;

  if (!text) return;

  tasks.push({ text, done: false });
  save();
  renderTasks();

  input.value = "";
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        <span style="text-decoration:${task.done ? "line-through" : "none"}">
          ${task.text}
        </span>

        <button onclick="toggle(${index})">✔</button>
        <button onclick="removeTask(${index})">🗑</button>
      </li>
    `;
  });
}

function toggle(i) {
  tasks[i].done = !tasks[i].done;
  save();
  renderTasks();
}

function removeTask(i) {
  tasks.splice(i, 1);
  save();
  renderTasks();
}

function save() {
  localStorage.setItem(user + "_tasks", JSON.stringify(tasks));
}

function logout() {
  localStorage.removeItem("loggedUser");
  window.location.href = "index.html";
}

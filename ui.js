function renderTasks(user) {
  const list = document.getElementById("taskList");
  const tasks = getTasks(user);

  list.innerHTML = "";

  tasks.forEach((t, i) => {
    list.innerHTML += `
      <li>
        <span style="text-decoration:${t.done ? "line-through" : "none"}">
          ${t.text}
        </span>

        <button onclick="handleToggle(${i})">✔</button>
        <button onclick="handleDelete(${i})">🗑</button>
      </li>
    `;
  });
}

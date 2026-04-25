function getTasks(user) {
  return Storage.get(user + "_tasks") || [];
}

function saveTasks(user, tasks) {
  Storage.set(user + "_tasks", tasks);
}

function addTask(user, text) {
  const tasks = getTasks(user);
  tasks.push({ text, done: false });
  saveTasks(user, tasks);
}

function toggleTask(user, index) {
  const tasks = getTasks(user);
  tasks[index].done = !tasks[index].done;
  saveTasks(user, tasks);
}

function deleteTask(user, index) {
  const tasks = getTasks(user);
  tasks.splice(index, 1);
  saveTasks(user, tasks);
}

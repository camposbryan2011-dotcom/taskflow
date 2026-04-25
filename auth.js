const AUTH_KEY = "taskflow_user";
const SESSION_KEY = "taskflow_session";

function register(user, pass) {
  const account = Storage.get(AUTH_KEY);

  if (account) {
    return { success: false, message: "Já existe uma conta" };
  }

  Storage.set(AUTH_KEY, { user, pass });
  return { success: true };
}

function login(user, pass) {
  const account = Storage.get(AUTH_KEY);

  if (!account) {
    return { success: false, message: "Conta não existe" };
  }

  if (account.user === user && account.pass === pass) {
    Storage.set(SESSION_KEY, user);
    return { success: true };
  }

  return { success: false, message: "Credenciais inválidas" };
}

function logout() {
  Storage.remove(SESSION_KEY);
  window.location.href = "index.html";
}

function getSession() {
  return Storage.get(SESSION_KEY);
}

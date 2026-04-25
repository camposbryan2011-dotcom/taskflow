function register() {
  const user = document.getElementById("newUser").value;
  const pass = document.getElementById("newPass").value;

  if (!user || !pass) {
    alert("Preencha tudo!");
    return;
  }

  const account = { user, pass };
  localStorage.setItem("account", JSON.stringify(account));

  alert("Conta criada!");
}

function login() {
  const userInput = document.getElementById("loginUser").value;
  const passInput = document.getElementById("loginPass").value;

  const saved = JSON.parse(localStorage.getItem("account"));

  if (!saved) {
    alert("Nenhuma conta encontrada!");
    return;
  }

  if (userInput === saved.user && passInput === saved.pass) {
    localStorage.setItem("loggedUser", saved.user);
    window.location.href = "dashboard.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
}

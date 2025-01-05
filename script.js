function togglePassword(id) {
  const passwordInput = document.getElementById(id);
  const icon = passwordInput.nextElementSibling.querySelector("i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text"; // Mostrar contraseña
    icon.classList.remove("bx-show");
    icon.classList.add("bx-hide");
  } else {
    passwordInput.type = "password"; // Ocultar contraseña
    icon.classList.remove("bx-hide");
    icon.classList.add("bx-show");
  }
}

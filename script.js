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

// Ocultar o mostrar el icono basado en el contenido del input
document.querySelectorAll('input[type="password"]').forEach((input) => {
  const icon = input.nextElementSibling;

  // Ocultar icono al cargar la página
  icon.style.display = input.value ? "inline" : "none";

  // Detectar cambios en el input
  input.addEventListener("input", function () {
    icon.style.display = this.value.length > 0 ? "inline" : "none";
  });
});

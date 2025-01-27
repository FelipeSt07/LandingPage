// Seleccionar el botón y el body
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Cargar el tema guardado o usar el tema claro por defecto
const savedTheme = localStorage.getItem("theme") || "light";
body.setAttribute("data-theme", savedTheme);
themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";

// Cambiar tema al hacer clic
themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

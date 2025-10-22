document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search");
  const btnBuscar = document.getElementById("btnBuscar");

  btnBuscar.addEventListener("click", () => {
    const query = searchInput.value.trim().toLowerCase();
    if (query) {
      alert(`Buscando: ${query} 🎬`);
    } else {
      alert("Por favor, escribe algo para buscar.");
    }
  });

  // Resalta el enlace activo
  const links = document.querySelectorAll(".nav-link");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});

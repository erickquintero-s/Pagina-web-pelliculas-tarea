const catalogo = document.getElementById('catalogo');
const detalle = document.getElementById('detalle');
const buscador = document.getElementById('search');

function mostrarCatalogo(lista) {
  catalogo.innerHTML = '';
  lista.forEach(p => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <img src="${p.poster}" alt="${p.titulo}">
      <h3>${p.titulo} (${p.año})</h3>
    `;
    div.onclick = () => mostrarDetalle(p);
    catalogo.appendChild(div);
  });
}

function mostrarDetalle(pelicula) {
  detalle.innerHTML = `
    <h2>${pelicula.titulo} (${pelicula.año})</h2>
    <p><strong>⭐ ${pelicula.rating}</strong></p>
    <p>${pelicula.resumen}</p>
    <iframe width="100%" height="315" src="${pelicula.trailer}" allowfullscreen></iframe>
    <br><br>
    <button onclick="cerrarDetalle()">Volver</button>
  `;
  detalle.classList.remove('oculto');
  catalogo.style.display = 'none';
}

function cerrarDetalle() {
  detalle.classList.add('oculto');
  catalogo.style.display = 'grid';
}

buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  const filtradas = peliculas.filter(p =>
    p.titulo.toLowerCase().includes(texto)
  );
  mostrarCatalogo(filtradas);
});

mostrarCatalogo(peliculas);

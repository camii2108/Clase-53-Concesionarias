// Captura de elementos del DOM
const bodyElement = document.querySelector('body');
const h1Element = document.querySelector('h1');

// Pregunta al usuario sobre el modo oscuro
const respuesta = confirm('¿Desea modo oscuro?');
if (respuesta) {
  bodyElement.style.backgroundColor = '#7f7f7f';
  bodyElement.classList.add('fondoMoviesList');
}

// Agregar mensaje y estilos al elemento h1
h1Element.innerText = 'LISTADO DE PELÍCULAS';
h1Element.style.color = 'white';
h1Element.style.backgroundColor = 'teal';
h1Element.style.padding = '20px';

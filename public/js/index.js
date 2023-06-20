const mainElement = document.querySelector('main');
const h2Element = document.querySelector('h2');
const aElement = document.querySelector('a');
const pElements = document.querySelectorAll('p');

const nombre = prompt('Ingrese su nombre:');


if (nombre) {
  h2Element.innerText = nombre;
} else {
  h2Element.innerText = 'Invitado';
}

h2Element.style.textTransform = 'uppercase';
aElement.style.color = '#E51B3E';

const respuesta = confirm('¿Desea colocar un fondo de pantalla?');
if (respuesta) {
  document.body.classList.add('fondo');
}

pElements.forEach((p, index) => {
  if (index % 2 === 0) {
    p.classList.add('destacadoPar');
  } else {
    p.classList.add('destacadoImpar');
  }
});

mainElement.style.display = 'block';

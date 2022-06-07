const nombreUsuario = window.localStorage.getItem('nombreUsuario');
const nombreText = document.getElementById('nombreU');
const role = document.getElementById('User-txt4');
const zona = document.getElementById('user-text5');
const nameTotal = document.getElementById('nombreReal');

console.log(nombreUsuario);

nombreText.innerHTML = nombreUsuario;

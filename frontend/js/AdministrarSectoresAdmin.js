const nombreUsuario = window.localStorage.getItem('nombreUsuario');
console.log(nombreUsuario);

cambiarPagina1 = () =>{
    window.localStorage.setItem('nombreUsuario', nombreUsuario);
    console.log(nombreUsuario);
    window.location.href = 'CrearSectoresAdmin.html';
};

flechaSectores.addEventListener('click',cambiarPagina1)


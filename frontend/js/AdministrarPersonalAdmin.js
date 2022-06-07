const nombreUsuario = window.localStorage.getItem('nombreUsuario');

cambiarPagina1 = () =>{
    window.localStorage.setItem('nombreUs', nombreUsuario);
    console.log(nombreUsuario);
    window.location.href = 'AdministrarTecnicosAdmin.html';
};
cambiarPagina2 = () =>{
    window.localStorage.setItem('nombreUs', nombreUsuario);
    console.log(nombreUsuario);
    window.location.href = 'AdministrarIngenierosAdmin.html';
};
cambiarPagina3 = () =>{
    window.localStorage.setItem('nombreUs', nombreUsuario);
    console.log(nombreUsuario);
    window.location.href = 'AdministrarPersonalAdmin.html';
};


flechatecnicos.addEventListener('click',cambiarPagina1)
flechaIngenieros.addEventListener('click',cambiarPagina2)

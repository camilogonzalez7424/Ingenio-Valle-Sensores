const nombreUs = window.localStorage.getItem('nombreUs');
console.log(nombreUs);

cambiarPagina1 = () =>{
    window.localStorage.setItem('nombreUs', nombreUs);
    console.log(nombreUs);
    window.location.href = 'AdministrarPersonalAdmin.html';
};

flechaSectores.addEventListener('click',cambiarPagina1)


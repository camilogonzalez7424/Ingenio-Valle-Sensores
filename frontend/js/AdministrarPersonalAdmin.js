const nombreUs = window.localStorage.getItem('nombreUs');
console.log(nombreUs);

cambiarPagina1 = () =>{
    window.localStorage.setItem('nombreUs', nombreUs);
    console.log(nombreUs);
    window.location.href = 'AdministrarIngenierosAdmin.html';
};
cambiarPagina2 = () =>{
    window.localStorage.setItem('nombreUs', nombreUs);
    console.log(nombreUs);
    window.location.href = 'AdministrarIngenierosAdmin.html';
};



flechatecnicos.addEventListener('click',cambiarPagina1)
flechaIngenieros.addEventListener('click',cambiarPagina2)

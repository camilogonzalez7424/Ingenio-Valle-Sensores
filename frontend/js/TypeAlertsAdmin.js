let sensorToPut;
let medidaToPut;
const candidateContainer = document.getElementById('sensoresDate');
const nombreUsuario = window.localStorage.getItem('nombreUsuario');



$('#cerrar-sesion').click(function(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: '¿Estás seguro que deseas cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, deseo salir!',
        cancelButtonText: 'No, cancelar!',
        reverseButtons: true
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                //console.log("SI");
                 window.location.href = '/index.html';

            } else{
                console.log("Nel Perro");
            }
          })
});

cambiarPagina1 = () =>{
    window.localStorage.setItem('nombreUs', nombreUsuario);
    console.log(nombreUsuario);
    window.location.href = 'InformacionPersonalAdmin.html';
};
cambiarPagina2 = () =>{
    window.localStorage.setItem('nombreUs', nombreUsuario);
    console.log(nombreUsuario);
    window.location.href = 'AdministrarSectorAdmin.html';
};
cambiarPagina3 = () =>{
    window.localStorage.setItem('nombreUs', nombreUsuario);
    console.log(nombreUsuario);
    window.location.href = 'AdministrarPersonalAdmin.html';
};


inforpersonal.addEventListener('click',cambiarPagina1)
adminsector.addEventListener('click',cambiarPagina2)
adminpersonal.addEventListener('click',cambiarPagina3)
let sensorToPut;
let medidaToPut;
const candidateContainer = document.getElementById('sensoresDate');
const nombreUs = 'holaaa';



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

$('#boton-Sensor').click(function(){
    let inputValueSensor = document.getElementById('nombreSensor').value;
    
    if(inputValueSensor.length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Rellene todos los campos',
        })
    }else{
        if(isNaN(inputValueSensor)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'ID debe ser numerico',
            })
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Sensor añadido exitosamente',
                showConfirmButton: false,
                timer: 1500
                })
        }
    }
    });

cambiarPagina1 = () =>{
    window.localStorage.setItem('nombreUs', nombreUs);
    console.log(nombreUs);
    window.location.href = 'AdministrarPersonalAdmin.html';
};
cambiarPagina2 = () =>{
    window.localStorage.setItem('nombreUs', nombreUs);
    console.log(nombreUs);
    window.location.href = 'AdministrarSectorAdmin.html';
};
cambiarPagina3 = () =>{
    window.localStorage.setItem('nombreUs', nombreUs);
    console.log(nombreUs);
    window.location.href = 'InformacionPersonalAdmin.html';
};


adminpersonal.addEventListener('click',cambiarPagina1)
adminsector.addEventListener('click',cambiarPagina2)
inforpersonal.addEventListener('click',cambiarPagina3)


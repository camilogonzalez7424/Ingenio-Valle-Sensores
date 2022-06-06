$('#boton-Tecnico').click(function(){
    let sensorID = document.getElementById('nombreSensor').value;
    sensorToPut = sensorID;

    Swal.fire({
        title: 'Ingrese la medida observada',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Registrar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
            medidaToPut = login;
            if(isNaN(login)){
                Swal.showValidationMessage(
                    'Ingrese un numero'
                )
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
        if (result.isConfirmed) {
        Swal.fire({
            title: 'Medida Registrada',
        })
        //console.log("ando aun en show alert")
        registrarMedida()
        }
    })


});


registrarMedida = () =>{
    //console.log("llegue a registrar")
    console.log(sensorToPut);
    console.log(medidaToPut);

}

$('#cerrar-sesion').click(function(){
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
//    window.location.href = 'frontend/login.html';

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
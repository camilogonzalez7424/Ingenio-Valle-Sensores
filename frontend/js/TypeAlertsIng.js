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
        })
});

$('#boton-Tecnico').click(function(){
Swal.fire({
    icon: 'success',
    title: 'Tecnico añadido exitosamente',
    showConfirmButton: false,
    timer: 1500
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

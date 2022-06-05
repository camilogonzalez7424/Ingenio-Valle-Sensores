$('#boton-Tecnico').click(function(){
    Swal.fire({
        title: 'Ingrese la medida observada',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Registrar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
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
        }
    })
});

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


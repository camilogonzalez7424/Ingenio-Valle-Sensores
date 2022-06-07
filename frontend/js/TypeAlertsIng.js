const nombreUsuario1 = window.localStorage.getItem('nombreUsuario1');

console.log(nombreUsuario1);



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
                 window.location.href = '/Ingenio-Valle-Sensores';

            } else{
                console.log("Nel Perro");
            }
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

    cambiarPagina = () =>{
        window.localStorage.setItem('nombreUsuario1', nombreUsuario1);
        console.log(nombreUsuario1);
        window.location.href = 'InformacionPersonalInge.html';
    };
    
    
    infoInge.addEventListener('click',cambiarPagina);


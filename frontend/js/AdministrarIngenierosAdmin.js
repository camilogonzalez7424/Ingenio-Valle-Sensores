

$('#boton-Sensor').click(function(){
    var inputValueSensor = document.getElementById('nombreInge').value;
    var userInge = document.getElementById('userInge').value;
    var contraInge = document.getElementById('contraInge').value;
    var roleInge = document.getElementById('roleInge').value;   
    if(inputValueSensor.length === 0 || userInge.length === 0 || contraInge.length === 0 || roleInge.length === 0){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Rellene todos los campos',
        })
    }else{
        if(isNaN(roleInge)){
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Role ID debe ser numerico',
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
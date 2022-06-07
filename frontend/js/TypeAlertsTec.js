let sensorToPut;
let medidaToPut;
const candidateContainer = document.getElementById('sensoresDate');
const nombreUsuario =  window.localStorage.getItem('nombreUsuario');

console.log(nombreUsuario);

const getData = async()=>{
    let url = `http://localhost:8080/api/measurement/all`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
   // const names = [obj[0].president, obj[1].president, obj[2].president, obj[3].president, obj[4].president,obj[5].president,obj[6].president,obj[7].president,obj[8].president];
   console.log(obj);
   
   candidateContainer.innerHTML = JSON.stringify(obj);
   
  }


$('#boton-Tecnico').click(function(){
    let sensorID = document.getElementById('nombreSensor').value;
    sensorToPut = sensorID;

    if(sensorID != ""){
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
        getData();
        }
    })

    }else{
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Ingrese el Id del sensor ¡Por favor!',
          })
    }
});


registrarMedida = () =>{
    //console.log("llegue a registrar")
    console.log(sensorToPut);
    console.log(medidaToPut);

    let obj ={
        sensorId: sensorToPut,
        measurements: medidaToPut
    };

    let url = 'http://localhost:8080/api/measurement/register';
    fetch(url, {
        method:'POST',
        headers:{
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(obj),
    
    
    
    
    });


    
    
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

cambiarPagina = () =>{
    window.localStorage.setItem('nombreUsuario', nombreUsuario);
    console.log(nombreUsuario);
    window.location.href = 'InformacionPersonalTec.html';
};


infoPersonal.addEventListener('click',cambiarPagina)

getData();
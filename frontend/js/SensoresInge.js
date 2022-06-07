const zone = document.getElementById('nombreZona');
const type = document.getElementById('typeSensor');

añadirSensor = ()=>{
    let obj ={
        sensorId: type.value,
        zoneId: zone.value
    };
    let pass;
    let url = 'http://localhost:8080/api/sensor/create';
    fetch(url, {
        method:'POST',
        headers:{
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(obj),
    
    });
        
}

añadir.addEventListener('click' ,añadirSensor);

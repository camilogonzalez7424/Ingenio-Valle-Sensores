const nombreUsuario = window.localStorage.getItem('nombreUs');
const nombreText = document.getElementById('nombreUs');
const role = document.getElementById('User-txt4');
const zona = document.getElementById('user-text5');
const nameTotal = document.getElementById('nombreReal');

console.log(nombreUsuario);

nombreText.innerHTML = nombreUsuario;


const getData = async()=>{
    let url = `http://localhost:8080/api/employee/info/${nombreUsuario}`;
    let response = await fetch(url, {method:'GET'} );
    let obj = await response.json();
   // const names = [obj[0].president, obj[1].president, obj[2].president, obj[3].president, obj[4].president,obj[5].president,obj[6].president,obj[7].president,obj[8].president];
   console.log(obj);
   

    nameTotal.innerHTML = obj[0].name;

    role.innerHTML = obj[0].roleId + '-Técnico';


   zona.innerHTML = obj[0].zoneId;



   
  }

 getData(); 


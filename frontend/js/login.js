const username = document.getElementById('username');
const password = document.getElementById('password');

const x = "hola";
/*
const getData = ()=>{
    let url = `http://localhost:8080/api/employee/p/${this.username.value}`;
    let response = fetch(url, {method:'GET'} );
    let obj = response => response.json();
   console.log("hola "+obj[0].pass);
   return obj;
  }*/

//,value
loginMenu = ()=>{
   // let labelsData =  getData();
    //console.log(labelsData);
    let pass;
    let url = `http://localhost:8080/api/employee/p/${this.username.value}`;
    fetch(url, {method:'GET'} )

    .then(response => response.json())
    .then(data =>{
        userN = data[0].username;
        //console.log(userN);
        pass = data[0].pass;

        role = data[0].roleId;
        console.log(role);

        if(userN === username.value  && pass === password.value){

            switch (role){
                case 1:
                    window.alert("¡BIENVENIDO! "+" Administrador "+userN+".");
                   
                    //window.localStorage.setItem('nombreUsuario',username);

                    window.location.href = "MenuAdministrador.html";
                    break;
                case 2:
                    window.alert("¡BIENVENIDO! "+" Ingeniero "+userN+".");

                    window.localStorage.setItem('nombreUsuario1',data[0].username);
                    window.location.href = "MenuIngeniero.html";
                    break;

                case 3:
                    window.alert("¡BIENVENIDO! "+" Técnico "+userN+".");

                    console.log(username);
                    window.localStorage.setItem('nombreUsuario',data[0].username);
                    window.location.href = "MenuTecnico.html";

                    break;
                default:
                    console.log("Holiwis");
            }

        }else{
            //console.log("NO");
            window.alert("Usuario y/o contraseña invalida.");

        }  
        
        //console.log(pass);
    })
    .catch(error => window.alert("Usuario y/o contraseña invalida."));
}



loginBack = () =>{
    window.location.href = '/Ingenio-Valle-Sensores';
    
}


backPage.addEventListener('click' , loginBack)

menuPage.addEventListener('click',loginMenu);
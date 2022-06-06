const username = document.getElementById('username');
const password = document.getElementById('password');



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
                    window.alert(userN+" es Administrador.");
                   
                    window.location.href = "";
                    break;
                case 2:
                    window.alert(userN+" es Ingeníero.");

                    window.location.href = "MenuIngeniero.html";
                    break;

                case 3:
                    window.alert(userN+" es Técnico.");

                    window.location.href = "";
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
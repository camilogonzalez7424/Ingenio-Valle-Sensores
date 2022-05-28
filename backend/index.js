const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//Registrar

const employeeServices = require('./services/employeeService');
employeeServices.createServices(app);


const PORT = process.env.PORT || 8080; 

app.listen(PORT, ()=>{
    console.log("El servidor esta preparado");
});
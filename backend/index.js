const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

//Servicios

const employeeServices = require('./services/employeeService');
employeeServices.createServices(app);

const sectorServices = require('./services/sectorService');
sectorServices.createServices(app);

const sensorServices = require('./services/sensorService');
sensorServices.createServices(app);

const measurementServices = require('./services/measurementService');
measurementServices.createServices(app);

const PORT = process.env.PORT || 8080; 

app.listen(PORT, ()=>{
    console.log("El servidor esta preparado");
});
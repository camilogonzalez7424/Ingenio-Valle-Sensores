const employeeProvider = require('../providers/employeeProvider');

const createServices = (app)=>{

    
    app.get('/api/employee/all', (req, res)=>{
        employeeProvider.getEmployee(
            (result) =>{
                res.send(result);
            }
        );
    });






}

module.exports.createServices = createServices;

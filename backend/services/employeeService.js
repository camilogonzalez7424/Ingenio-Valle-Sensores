const employeeProvider = require('../providers/employeeProvider');

const createServices = (app)=>{

    
    app.get('/api/employee/all', (req, res)=>{
        employeeProvider.getEmployee(
            (result) =>{
                res.send(result);
            }
        );
    });

    app.post('/api/employee/create', (req, res)=>{
        let employee = req.body;
        employeeProvider.addEmployee(employee, (result)=>{
            res.send(result);
        });

    });


    app.get('/api/employee/p/:user', (req,res)=>{
        let userId = req.params.user;
        employeeProvider.getEmployeeUsername(userId, (result)=>{
            res.send(result);
        });
    });




}

module.exports.createServices = createServices;

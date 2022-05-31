const db = require('../db/DBConnection');

const getEmployee = (onResult)=>{
    db.con.query('SELECT * FROM employee_Trianix order by id', (err, result)=>{
        if(!err){
            onResult(result);
        }


    });
}

//En el front crear o hacer un apartado que muestre los roles: 1-administrador, 2-Ingeniero, 3-Tecnico
//Hacer más intuitivo
const addEmployee = (employee, onResult)=>{
    db.con.query("INSERT INTO employee_Trianix(name, username, pass, roleId) VALUES ('"+employee.name+"','"+employee.username+"','"+employee.pass+"','"+employee.roleId+"')", (err)=>{
        if(!err){
            onResult({result:"OK"});
        }else{
            onResult({result:"ERROR"});
        }
    });
}



module.exports.getEmployee = getEmployee;
module.exports.addEmployee = addEmployee;
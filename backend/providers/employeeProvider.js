const db = require('../db/DBConnection');

const getEmployee = (onResult)=>{
    db.con.query('SELECT * FROM employee_Trianix order by id', (err, result)=>{
        if(!err){
            onResult(result);
        }


    });
}



module.exports.getEmployee = getEmployee;
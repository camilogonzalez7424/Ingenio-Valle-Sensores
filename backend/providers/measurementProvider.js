const db = require('../db/DBConnection');


const registerMeasure = (measurement, onResult)=>{
    db.con.query("INSERT INTO measurements_Trianix(sensorId, measurements) VALUES ('"+measurement.sensorId+"','"+measurement.measurements+"')", (err)=>{
        if(!err){
            onResult({result:"OK"});
        }else{
            onResult({result:"ERROR"});
        }
    });
}

const getMeasure = (onResult)=>{
    db.con.query('SELECT * FROM measurements_Trianix order by id', (err, result)=>{
        if(!err){
            onResult(result);
        }


    });
}


module.exports.registerMeasure = registerMeasure;
module.exports.getMeasure = getMeasure;


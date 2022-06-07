const db = require('../db/DBConnection');


const createSensor = (sensor, onResult)=>{
    db.con.query("INSERT INTO sensor_Trianix(zoneId, sensorTypeId) VALUES ('"+sensor.zoneId+"','"+sensor.sensorTypeId+"')", (err)=>{
        if(!err){
            onResult({result:"OK"});
        }else{
            onResult({result:"ERROR"});
        }
    });
}

const getSensor = (onResult)=>{
    db.con.query('SELECT * FROM sensor_Trianix order by id', (err, result)=>{
        if(!err){
            onResult(result);
        }


    });
}

module.exports.getSensor=getSensor;
module.exports.createSensor = createSensor;
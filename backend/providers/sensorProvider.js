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


module.exports.createSensor = createSensor;
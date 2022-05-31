const db = require('../db/DBConnection');


const createSector = (sector, onResult)=>{
    db.con.query("INSERT INTO zone_Trianix(name) VALUES ('"+sector.name+"')", (err)=>{
        if(!err){
            onResult({result:"OK"});
        }else{
            onResult({result:"ERROR"});
        }
    });
}


module.exports.createSector = createSector;
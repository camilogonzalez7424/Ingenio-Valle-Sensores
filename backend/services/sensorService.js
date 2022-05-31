const sensorProvider = require('../providers/sensorProvider');

const createServices = (app)=>{

    app.post('/api/sensor/create', (req, res)=>{
        let sensor = req.body;
        sensorProvider.createSensor(sensor, (result)=>{
            res.send(result);
        });

    });








}

module.exports.createServices = createServices;
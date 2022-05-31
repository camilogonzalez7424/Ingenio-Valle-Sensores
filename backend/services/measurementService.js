const measurementProvider = require('../providers/measurementProvider');

const createServices = (app)=>{

    app.post('/api/measurement/register', (req, res)=>{
        let measurement = req.body;
        measurementProvider.registerMeasure(measurement, (result)=>{
            res.send(result);
        });

    });


    app.get('/api/measurement/all', (req, res)=>{
        measurementProvider.getMeasure(
            (result) =>{
                res.send(result);
            }
        );
    });







}

module.exports.createServices = createServices;
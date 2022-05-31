const sectorProvider = require('../providers/sectorProvider');

const createServices = (app)=>{

    app.post('/api/sector/create', (req, res)=>{
        let sector = req.body;
        sectorProvider.createSector(sector, (result)=>{
            res.send(result);
        });

    });








}

module.exports.createServices = createServices;
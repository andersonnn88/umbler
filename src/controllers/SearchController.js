const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
    async index(req, res){
        const { latitude, longitute, techs } = req.query;
        
        const techsArrays = parseStringAsArray(techs);
        //busca em um raio de 10 km 
        //filtra por tecnologias

        const devs = await Dev.find({
            techs:{
                $in: techsArrays,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitute, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });
        return res.json({ devs});
    }
} 
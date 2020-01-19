const axios = require('axios');
const Dev = require('../models/dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(req,res){
        const devs = await Dev.find();

        return res.json(devs);
    },
    async store(req, res) {
        const { github_username, techs, latitude, longitude} = req.body;
        
        let dev = await Dev.findOne({github_username});

        if(!devexist){

        const apiresponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
        const { name = login , avatar_url, bio } = apiresponse.data;
    
        const techsArrays = parseStringAsArray(techs);
    
        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        }
        console.log(name, avatar_url, bio, github_username); 
    
         dev = await Dev.create({
            github_username,
            name,
            avatar_url,
            bio,
            techs: techsArrays, 
            location,
        });

    }
        return  res.json(dev);
    }
}

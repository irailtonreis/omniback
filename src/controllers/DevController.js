const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray');

module.exports = {
  async index(req, res){
    const dev = await Dev.find();

    return res.json(dev);

  },
  async store (req, res){
    const { github_username, techs } = req.body;
   
    let dev = await Dev.findOne({github_username});

    if(!dev){

    const response = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio} = response.data;
   
     const techsArray = parseStringAsArray(techs);
   
     dev = await Dev.create({
       github_username,
       name,
       avatar_url,
       bio,
     })

    }
     return res.json(dev);
},

async update(req, res){
  const { github_username, techs } = req.body;
  const id = req.params.id;

  const techsArray = parseStringAsArray(techs);

await Dev.findById({_id: id}, function(error, user){
  if(error){
      res.status(404).json( {Error: error});
  }
  else{
      user.github_username = github_username;
      user.techs = techsArray;
      user.save();
      res.json(user);
  }
});

}
}
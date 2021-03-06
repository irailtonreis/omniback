const { Router } = require('express');
const axios = require('axios');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = new Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:id', DevController.update)

// routes.get('/search', SearchController.index);

module.exports = routes;
const routes = require('express').Router();

routes.use('/contacts', require('./contacts')
 // #swagger.tags = ['Contacts']
);
routes.use('/', require('./home')
 // #swagger.tags = ['Other']
);

module.exports = routes;
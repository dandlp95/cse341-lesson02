const routes = require('express').Router();
const contactModel = require('../db/model')
const ObjectId = require('mongodb').ObjectId;
const {
    getAllContacts, 
    getContact, 
    addContact, 
    editContact, 
    deleteContact
} = require('../controller/contacts');

routes.get('/', getAllContacts);

routes.get('/:id', getContact);

routes.post('/add_contact', addContact);

routes.put('/edit_contact/:id', editContact);

routes.delete('/delete/:id', deleteContact);


module.exports = routes;


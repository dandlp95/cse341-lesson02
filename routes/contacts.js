const routes = require("express").Router();
// const contactModel = require('../db/model')
// const ObjectId = require('mongodb').ObjectId;
const {
  getAllContacts,
  getContact,
  addContact,
  editContact,
  deleteContact,
} = require("../controller/contacts");

routes.get(
  "/",
  getAllContacts
  /* #swagger.summary = 'Returns all contacts' */
  /* #swagger.description = 'Returns all contacts added to database.' */
  /* #swagger.operationId = 'getAllContacts.' */
  /* #swagger.responses[200] = {
      description: 'Returns all contacts.',
      schema: {$ref: '#/definitions/Users'}
  } */
);

routes.get(
  "/:id",
  getContact
  /* #swagger.summary = 'Returns 1 contact by Id.' */
  /* #swagger.description = 'Returns the contact with the Id that matches the request
    Id.' */
  /* #swagger.operationId = 'getContact' */
  /* #swagger.parameters['id'] = {description: 'User Ids'} */
  /* #swagger.responses[200] = {
    description: 'Returns contact with specified request id',
    schema: { $ref: '#/definitions/User'}
  } */
);

routes.post(
  "/add_contact",
  addContact
  /* #swagger.summary = 'Adds 1 contact.' */
  /* #swagger.description = 'Adds the contact in the request.' */
  /* #swagger.operationId = 'addContact' */
  /* #swagger.parameters = [{
    name: 'body', 
    in:'body',
    schema: { $ref: '#/definitions/User' }
  }] */
  /* #swagger.responses[200] = {
    description: 'Returns posted contact',
    schema: { $ref: '#/definitions/User'}
  }
  */
);

routes.put(
  "/edit_contact/:id",
  editContact
  /* #swagger.summary = 'Edits 1 contact by Id.' */
  /* #swagger.description = 'Changes the contact with the Id that matches the Id in 
    the request Id.' */
  /* #swagger.operationId = 'putContact' */
  /* #swagger.parameters = [{
    name: 'body', 
    in:'body',
    schema: { $ref: '#/definitions/User' }
  }] */
  /* #swagger.responses[200] = {
    description: 'Returns contact before edit',
    schema: { $ref: '#/definitions/User'}
  }*/
);

routes.delete(
  "/delete/:id",
  deleteContact
  // #swagger.summary = 'Deletes 1 contact by Id.'
  // #swagger.description = 'Deletes the contact with the Id that matches the Id in the request Id.'
  // #swagger.operationId = 'deleteContact'
  /* #swagger.responses[200] = {
    description: 'Returns deleted contact.',
    schema: { $ref: '#/definitions/User'}
  }*/
);

module.exports = routes;

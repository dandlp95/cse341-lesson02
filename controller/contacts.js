const routes = require('express').Router();
const contactModel = require('../db/model')
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async function (req, res) {

    const contacts = await contactModel.find({});
  
    try {
      res.status(200).send(contacts);
    } catch (error) {
      res.status(500).send(error);
    }
}

const getContact = async function (req, res){

    const contact = await contactModel.findById(req.params.id);
    try{
        res.status(200).send(contact);
    }catch (error) {
        res.status(500).send(error);
    }
 }

const addContact = async function (req, res){

    const contact = new contactModel(req.body);

    try{
        await contact.save();
        res.status(200).send(contact);
    }catch (error) {
        res.status(500).send(error);
    }
}

const editContact = function (req, res){

    contactModel.findByIdAndUpdate(req.params.id, req.body, function(err, docs){
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(docs);
        }
    })
}

const deleteContact = function (req, res){

    contactModel.findByIdAndDelete(req.params.id, (err, docs)=>{
        if (err) {
            res.status(400).send(err);
        }
        else {
            if (docs === null) {
                res.status(200).send("Already Deleted");
            }
            else {
                res.status(200).send(docs)
                res.send(docs);
            }}
    })
}

module.exports = {
    getAllContacts,
    getContact,
    addContact,
    editContact,
    deleteContact
};
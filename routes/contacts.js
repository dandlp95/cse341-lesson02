const routes = require('express').Router();
const contactModel = require('../db/model')
const ObjectId = require('mongodb').ObjectId;

routes.get('/', async function (req, res){

    const contacts = await contactModel.find({});
  
    try {
      res.status(200).send(contacts);
    } catch (error) {
      res.status(500).send(error);
    }
});

routes.get('/:id', async function (req, res){

   const contact = await contactModel.findById(req.params.id);
   try{
       res.status(200).send(contact);
   }catch (error) {
       res.status(500).send(error);
   }
});

routes.post('/add_contacts', async function (req, res){

    const contact = new contactModel(req.body);

    try{
        await contact.save();
        res.status(200).send(contact);
    }catch (error) {
        res.status(500).send(error);
    }
})

routes.put('/edit_contact/:id', function (req, res){

    contactModel.findByIdAndUpdate(req.params.id, req.body, function(err, docs){
        if(err){
            res.status(400).send(err);
        }else{
            res.status(200).send(docs);
        }
    })
    
})

routes.delete('/delete/:id', function (req, res){

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
})


module.exports = routes;


const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
  .post('/getNote', async (req, res) => {
    try {
      let note = await Note.getNote(req.body);
      res.send({...note, userID: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/createNote', async (req, res) => {
    try {
      let note = await Note.createNote(req.body);
      res.send({...note, userID: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })


module.exports = router;

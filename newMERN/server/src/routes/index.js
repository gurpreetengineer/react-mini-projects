const router = require('express').Router();
const Controller = require("../controllers");
const config = require('../../configuration');

// router.get(`${config.endPoints.readNote}`, Controller.readNote);

router.post(`${config.endPoints.createNote}`, Controller.NotesController.CreateNotesController);

router.get(`${config.endPoints.readNote}/dummy`, Controller.DummyController.DummyController);

module.exports = router;
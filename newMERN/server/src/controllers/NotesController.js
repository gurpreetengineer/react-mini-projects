const NotesModel = require('../models').NotesModels;
const Validations = require('../Validations');
const config = require('../../configuration');

const CreateNotesController = async (req, res) => {
  try{
    await Validations.NotesValidations.NotesValidations(req);
    let iNote = await new NotesModel(req.body).save();
    res.end('[ERROR NONE] Note saved successfully');
    console.log('[ERROR NONE] Note saved successfully', iNote);
    
  } catch (error) {
    console.log('[CATCH EXCEPTION ERROR] Specified Error: ', error );
    // res.send('[CATCH EXCEPTION ERROR] Specified Error ', error );
    res.send({
      statusCode: config.statusCodes.BAD_REQUEST,
      message: `[CATCH EXCEPTION ERROR] Specified Error: ${error}`,
    });
  }
}

module.exports = {
  CreateNotesController: CreateNotesController
};

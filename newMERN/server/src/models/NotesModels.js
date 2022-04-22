const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const NotesModel = new Schema({
  noteOwner: {type: String},
  noteCreatedDate: {type: String},
  noteModifiedDate: {type: String},
  noteWorkingHoursSpent: { type: String },
  noteName: {type: String},
  noteDescription: {type: String},
});
    
const Notes = mongoose.model("Notes", NotesModel);

module.exports = Notes;
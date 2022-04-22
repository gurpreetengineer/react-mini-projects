const joi = require("joi");
const common = require("../common/functions");

const NotesValidations = async (req) => {
  const noteSchema = joi.object().keys({
    noteOwner: joi.string().trim().required(),
    noteCreatedDate: joi.string().trim().required(),
    noteModifiedDate: joi.string().trim().required(),
    noteWorkingHoursSpent: joi.string().trim().optional(),
    noteName: joi.string().trim().optional(),
    noteDescription: joi.string().trim().optional(),
  })

  return await common.validateSchema(req.body, noteSchema);
};

module.exports = {
  NotesValidations: NotesValidations,
};



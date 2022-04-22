const configVariables = require("./environment/variables");

const { error, envVariables} = configVariables;

module.exports = {
  SERVER_PORT: envVariables.SERVER_PORT,
  NODE_ENV: envVariables.NODE_ENV,
  MONGO_DB_CONNECTION_URL: envVariables.MONGO_DB_CONNECTION_URL,
  DB_PORT: envVariables.DB_PORT,
  endPoints: {
    createNote: envVariables.CREATE_NOTE,
    readNote: envVariables.READ_NOTE,
    readNotes: envVariables.READ_NOTES,
    updateNote: envVariables.UPDATE_NOTE,
    deleteNote: envVariables.DELETE_NOTE,
  },
  statusCodes: {
    CONTINUE: envVariables.CONTINUE,
    SWITCHING_PROTOCOLS: envVariables.SWITCHING_PROTOCOLS,
    PROCESSING: envVariables.PROCESSING,
    SUCCESS: envVariables.SUCCESS,
    CREATED: envVariables.CREATED,
    UNAUTHORIZED: envVariables.UNAUTHORIZED,
    FORBIDDEN: envVariables.FORBIDDEN,
    ACCESS_NOT_ALLOWED: envVariables.ACCESS_NOT_ALLOWED,
    NOT_FOUND: envVariables.NOT_FOUND,
    RUNDOWN_ERROR: envVariables.RUNDOWN_ERROR,
    EMPTY_DATA: envVariables.EMPTY_DATA,
    NOT_ACCEPTABLE: envVariables.NOT_ACCEPTABLE,
    CONFLICT: envVariables.CONFLICT,
    BAD_REQUEST: envVariables.BAD_REQUEST,
    UNPROCESSABLE_ENTITY: envVariables.UNPROCESSABLE_ENTITY,
    INTERNAL_SERVER_ERROR: envVariables.INTERNAL_SERVER_ERROR,
    NOT_IMPLEMENTED: envVariables.NOT_IMPLEMENTED,
    SERVICE_UNAVAILABLE: envVariables.SERVICE_UNAVAILABLE,
    GATEWAY_TIME_OUT: envVariables.GATEWAY_TIME_OUT
  }
};
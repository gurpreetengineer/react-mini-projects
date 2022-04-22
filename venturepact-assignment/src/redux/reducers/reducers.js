import { SHOW_ALL_NOTES, SET_USER_DETAILS, ADD_A_NOTE, REMOVE_A_NOTE } from '../actionTypes';

const initialStateForUser = {
  login: false,
  userDetails: [],
};
const initialStateForNotes = {
  notes: [{
    id: new Date().getTime(),
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 22,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }, {
    id: 33,
    noteTitle: 'noteTitlsdfsdfsdfsdfsfsfsdfe',
    noteDescription: 'noteDescripdfdfgsdfgsdfgsdfgsdfgsdfgsd sdfgs dfg sdfg sdf gsdf gsdf gs dfgsdfgsdf g sdf gsdf g sdfgsdfgdfs gsdfgdfsgdfgd fgtion',
    createdAt: Date(),
    isDeleted: false,
  }]
}

export const editingNotesReducer = (state = initialStateForNotes, { type, payload }) => {
  console.log('inside reducerrrrrrrr', type, payload);
  switch (type) {
    case SHOW_ALL_NOTES:
      return state.notes
    case ADD_A_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          payload,
        ],
      };
    case REMOVE_A_NOTE:
      for (let aNote of state.notes) {
        console.log('yyyyyyy ', aNote, state.notes);
        console.log('yyyyyyyzzzz ', payload);
        if (aNote.id === payload) {
          aNote.isDeleted = true;
        }
      }
      state.notes.filter((aNote) => aNote.id !== payload)
      return state;
    default:
      return state;
  }
};

export const loginReducer = (state = initialStateForUser, { type, payload }) => {
  switch (type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        login: true,
        userDetails: payload,
      }
    default:
      return state;
  }
}
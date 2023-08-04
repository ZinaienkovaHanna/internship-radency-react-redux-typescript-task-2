import notesData from '../../data/notes';
import {
    NoteStateType,
    NoteActionTypes,
    NoteAction,
} from '../../types/notesTypes';

const initialState: NoteStateType = {
    notes: notesData,
};

const notesReducer = (state = initialState, action: NoteAction) => {
    switch (action.type) {
        case NoteActionTypes.ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };
        case NoteActionTypes.TOGGLE_NOTE:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.id
                        ? { ...note, archived: !action.archived }
                        : note
                ),
            };
        case NoteActionTypes.DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note.id !== action.payload),
            };
        case NoteActionTypes.EDIT_NOTE:
            return {
                ...state,
                notes: state.notes.map((note) =>
                    note.id === action.id ? action.payload : note
                ),
            };
        default:
            return state;
    }
};

export default notesReducer;

import notesData from '../../data/notes';
import {
    NoteStateType,
    NoteActionTypes,
    NoteAction,
} from '../../types/notesTypes';

const initialState: NoteStateType = {
    notes: notesData,
    loading: false,
    error: null,
};

const notesReducer = (state = initialState, action: NoteAction) => {
    switch (action.type) {
        case NoteActionTypes.FETCH_NOTES:
            return {
                loading: true,
                error: null,
                notes: [],
            };
        case NoteActionTypes.FETCH_NOTES_SUCCESS:
            return {
                loading: false,
                error: null,
                notes: action.payload,
            };
        case NoteActionTypes.FETCH_NOTES_ERROR:
            return {
                loading: false,
                error: action.payload,
                notes: [],
            };
        default:
            return state;
    }
};

export default notesReducer;

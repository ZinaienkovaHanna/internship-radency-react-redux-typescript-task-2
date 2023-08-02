// src/action-creators/noteActions.tsx

import { NoteType, NoteActionTypes } from '../../types/notesTypes';

export const addNoteAction = (note: NoteType) => {
    return {
        type: NoteActionTypes.ADD_NOTE,
        payload: note,
    };
};

export const toggleNoteAction = (id: string, archived: boolean) => {
    return {
        type: NoteActionTypes.TOGGLE_NOTE,
        id,
        archived,
    };
};

export const deleteNoteAction = (id: string) => {
    return {
        type: NoteActionTypes.DELETE_NOTE,
        payload: id,
    };
};

export declare const styles: {
    modal: string;
};

export interface NoteType {
    id: string;
    name: string;
    created: string;
    category: string;
    content: string;
    dates: string;
    archived: boolean;
}

export interface NoteStateType {
    notes: any[];
}

export enum NoteActionTypes {
    ADD_NOTE = 'ADD_NOTE',
    TOGGLE_NOTE = 'TOGGLE_NOTE',
    DELETE_NOTE = 'DELETE_NOTE',
}

interface AddNoteAction {
    type: NoteActionTypes.ADD_NOTE;
    payload: NoteType[];
}

interface ToggleNoteAction {
    type: NoteActionTypes.TOGGLE_NOTE;
    id: string;
    archived: boolean;
}

interface DeleteNoteAction {
    type: NoteActionTypes.DELETE_NOTE;
    payload: string;
}

export type NoteAction = AddNoteAction | ToggleNoteAction | DeleteNoteAction;

export interface FormData {
    name: string;
    category: string;
    content: string;
}

export interface ModalProps {
    onClose: () => void;
}

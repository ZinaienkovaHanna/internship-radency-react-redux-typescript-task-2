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
    EDIT_NOTE = 'EDIT_NOTE',
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

interface EditNoteAction {
    type: NoteActionTypes.EDIT_NOTE;
    id: string;
    payload: NoteType[];
}

export type NoteAction =
    | AddNoteAction
    | ToggleNoteAction
    | DeleteNoteAction
    | EditNoteAction;

export interface FormData {
    name: string;
    category: string;
    content: string;
}

export interface PropsNoteModal {
    onClose: () => void;
    editingId: string | null;
}

export interface PropsNoteList {
    onOpen: (id: string) => void;
}

export interface PropsNote {
    note: NoteType;
    onOpen: (id: string) => void;
}

export interface PropsNoteManagementButtons {
    onOpen: () => void;
}

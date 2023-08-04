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
    showArchived: boolean;
}

export interface PropsNoteManagementButtons {
    onOpen: () => void;
    showArchived: boolean;
    setShowArchived: (archived: boolean) => void;
}

export type TableHeader = {
    label: any;
    key: string;
};

export type TableRow = {
    [key: string]: any;
};

export type PropsTable = {
    headers: TableHeader[];
    rows: TableRow[];
    rowClassName?: string;
    tableClassName?: string;
};

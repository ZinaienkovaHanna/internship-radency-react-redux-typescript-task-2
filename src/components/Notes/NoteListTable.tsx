import React from 'react';
import { FaArchive, FaTrashAlt } from 'react-icons/fa';
import { BsPencil } from 'react-icons/bs';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NoteType, PropsNoteList } from '../../types/notesTypes';
import { useDispatch } from 'react-redux';
import Table from '../Table/Table';
import {
    deleteNoteAction,
    toggleNoteAction,
} from '../../store/action-creators/noteActions';
import { getIconByCategory } from '../../utils/utils';

const NoteListTable: React.FC<PropsNoteList> = ({ onOpen, showArchived }) => {
    const { notes } = useTypedSelector((state) => state.notes);
    const dispatch = useDispatch();

    const deleteNoteHandler = (id: string) => {
        dispatch(deleteNoteAction(id));
    };

    const toggleNoteHandler = (id: string, archived: boolean) => {
        dispatch(toggleNoteAction(id, archived));
    };

    const filteredNotes = showArchived
        ? notes.filter((note) => note.archived)
        : notes.filter((note) => !note.archived);

    const headers = [
        { label: 'Name', key: 'name' },
        { label: 'Created', key: 'created' },
        { label: 'Category', key: 'category' },
        { label: 'Content', key: 'content' },
        { label: 'Dates', key: 'dates' },
        {
            label: (
                <div className="flex justify-center">
                    <FaArchive className="pl-2" />
                    <FaTrashAlt className="pl-2" />
                </div>
            ),
            key: 'actions',
        },
    ];

    const rows = filteredNotes.map((note: NoteType) => ({
        id: note.id,
        name: (
            <div className="flex items-center">
                <div className="flex items-center justify-center bg-text-header w-8 h-8 rounded-full">
                    {getIconByCategory(note.category)}
                </div>
                <div className="ml-4">{note.name}</div>
            </div>
        ),
        created: note.created.toLocaleString(),
        category: note.category,
        content: note.content,
        dates: note.dates.toLocaleString(),
        actions: (
            <div className="flex justify-center">
                <BsPencil
                    className="pl-2 w-8 cursor-pointer hover:scale-125"
                    onClick={() => onOpen(note.id)}
                />
                <FaArchive
                    className="pl-2 w-8 cursor-pointer hover:scale-125"
                    onClick={() => toggleNoteHandler(note.id, note.archived)}
                />
                <FaTrashAlt
                    className="pl-2 w-8 cursor-pointer hover:scale-125"
                    onClick={() => deleteNoteHandler(note.id)}
                />
            </div>
        ),
    }));

    return (
        <Table
            headers={headers}
            rows={rows}
            rowClassName={showArchived ? 'line-through' : ''}
        />
    );
};

export default NoteListTable;

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

import './NoteListTable.css';

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
        { label: '', key: 'icon' },
        { label: 'Name', key: 'name' },
        { label: 'Created', key: 'created' },
        { label: 'Category', key: 'category' },
        { label: 'Content', key: 'content' },
        { label: 'Dates', key: 'dates' },
        {
            label: (
                <div>
                    <FaArchive className="header-icon" />
                    <FaTrashAlt className="header-icon" />
                </div>
            ),
            key: 'actions',
        },
    ];

    const rows = filteredNotes.map((note: NoteType) => ({
        id: note.id,
        icon: (
            <div className="circle-icon">
                {getIconByCategory(note.category)}
            </div>
        ),
        name: note.name,
        created: note.created.toLocaleString(),
        category: note.category,
        content: note.content,
        dates: note.dates.toLocaleString(),
        actions: (
            <>
                <BsPencil
                    className="edit-icon"
                    onClick={() => onOpen(note.id)}
                />
                <FaArchive
                    className="archive-icon"
                    onClick={() => toggleNoteHandler(note.id, note.archived)}
                />
                <FaTrashAlt
                    className="delete-icon"
                    onClick={() => deleteNoteHandler(note.id)}
                />
            </>
        ),
    }));

    return (
        <Table
            headers={headers}
            rows={rows}
            rowClassName={showArchived ? 'isArchived' : ''}
        />
    );
};

export default NoteListTable;

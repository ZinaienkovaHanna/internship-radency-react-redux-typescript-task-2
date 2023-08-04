import React from 'react';
import { FaArchive, FaTrashAlt } from 'react-icons/fa';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import NoteTableRow from './NoteTableRow';
import { NoteType, PropsNoteList } from '../../types/notesTypes';

import './NoteListTable.css';

const NoteListTable: React.FC<PropsNoteList> = ({ onOpen, showArchived }) => {
    const { notes } = useTypedSelector((state) => state.notes);

    const filteredNotes = showArchived
        ? notes.filter((note) => note.archived)
        : notes.filter((note) => !note.archived);

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                    <th>
                        <FaArchive className="header-icon" />
                        <FaTrashAlt className="header-icon" />
                    </th>
                </tr>
            </thead>
            <tbody>
                {filteredNotes.map((note: NoteType) => (
                    <NoteTableRow key={note.id} note={note} onOpen={onOpen} />
                ))}
            </tbody>
        </table>
    );
};

export default NoteListTable;

import React from 'react';
import { FaArchive, FaTrashAlt } from 'react-icons/fa';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Note from '../Note/Note';
import { NoteType, PropsNoteList } from '../../types/notesTypes';

import './NoteList.css';

const NoteList: React.FC<PropsNoteList> = ({ onOpen }) => {
    const { notes } = useTypedSelector((state) => state.notes);

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
                {notes.map((note: NoteType) => (
                    <Note key={note.id} note={note} onOpen={onOpen} />
                ))}
            </tbody>
        </table>
    );
};

export default NoteList;

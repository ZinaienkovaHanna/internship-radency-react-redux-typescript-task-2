import React from 'react';
import { FaArchive, FaTrashAlt } from 'react-icons/fa';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Note from '../Note/Note';
import { NoteType } from '../../types/notesTypes';

const NoteList: React.FC = () => {
    const { notes } = useTypedSelector((state) => state.notes);

    console.log(notes);

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
                        <FaArchive />
                        <FaTrashAlt />
                    </th>
                </tr>
            </thead>
            <tbody>
                {notes.map((note: NoteType) => (
                    <Note key={note.id} note={note} />
                ))}
            </tbody>
        </table>
    );
};

export default NoteList;

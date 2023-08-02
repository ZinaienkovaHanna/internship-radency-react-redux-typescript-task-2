import React from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';
import Note from '../Note/Note';

const NoteList: React.FC = () => {
    const { notes, error, loading } = useTypedSelector((state) => state.notes);

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Created</th>
                    <th>Category</th>
                    <th>Content</th>
                    <th>Dates</th>
                </tr>
            </thead>
            <tbody>
                {notes.map((note) => (
                    <Note key={note.id} note={note} />
                ))}
            </tbody>
        </table>
    );
};

export default NoteList;

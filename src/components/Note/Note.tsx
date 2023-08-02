import React from 'react';
import { BsPencil } from 'react-icons/bs';
import { BiTask } from 'react-icons/bi';
import {
    FaLightbulb,
    FaQuoteRight,
    FaArchive,
    FaTrashAlt,
    FaComment,
} from 'react-icons/fa';

import { NoteType } from '../../types/notesTypes';

const Note: React.FC<{ note: NoteType }> = ({ note }) => {
    const getIconByCategory = (category: string) => {
        switch (category) {
            case 'Task':
                return <BiTask />;
            case 'Idea':
                return <FaComment />;
            case 'Random Thought':
                return <FaLightbulb />;
            case 'Quote':
                return <FaQuoteRight />;
            default:
                return null;
        }
    };

    return (
        <tr key={note.id}>
            <td>
                {getIconByCategory(note.category)} {note.name}
            </td>
            <td>{note.created.toLocaleString()}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{note.dates.toLocaleString()}</td>
            <td>
                <BsPencil />
                <FaArchive />
                <FaTrashAlt />
            </td>
        </tr>
    );
};

export default Note;

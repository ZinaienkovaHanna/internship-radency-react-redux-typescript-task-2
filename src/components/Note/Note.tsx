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
import { useDispatch } from 'react-redux';
import {
    deleteNoteAction,
    toggleNoteAction,
} from '../../store/action-creators/noteActions';
import { PropsNote } from '../../types/notesTypes';

import './Note.css';

const Note: React.FC<PropsNote> = ({ note, onOpen }) => {
    const dispatch = useDispatch();

    const deleteNoteHandler = (id: string) => {
        dispatch(deleteNoteAction(id));
    };

    const toggleNoteHandler = (id: string, archived: boolean) => {
        dispatch(toggleNoteAction(id, archived));
    };

    const getIconByCategory = (category: string) => {
        switch (category) {
            case 'Task':
                return <BiTask />;
            case 'Idea':
                return <FaLightbulb />;
            case 'Random Thought':
                return <FaComment />;
            case 'Quote':
                return <FaQuoteRight />;
            default:
                return null;
        }
    };

    return (
        <tr className={note.archived ? 'isArchived' : ''}>
            <td>
                <div className="circle-icon">
                    {getIconByCategory(note.category)}
                </div>
            </td>
            <td>{note.name}</td>
            <td>{note.created.toLocaleString()}</td>
            <td>{note.category}</td>
            <td>{note.content}</td>
            <td>{note.dates.toLocaleString()}</td>
            <td>
                <BsPencil
                    className="edit-icon"
                    onClick={() => onOpen(note.id)}
                />
                <FaArchive
                    className="archive-icon"
                    onClick={() => toggleNoteHandler(note.id, note.archived)}
                />
                <FaTrashAlt
                    onClick={() => deleteNoteHandler(note.id)}
                    className="delete-icon"
                />
            </td>
        </tr>
    );
};

export default Note;

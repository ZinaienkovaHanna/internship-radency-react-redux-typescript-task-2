import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
    addNoteAction,
    editNoteAction,
} from '../../store/action-creators/noteActions';
import { NoteType, FormData, PropsNoteModal } from '../../types/notesTypes';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import './NoteModal.css';

const NoteModal: React.FC<PropsNoteModal> = ({ onClose, editingId }) => {
    const dispatch = useDispatch();
    const { notes } = useTypedSelector((state) => state.notes);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        category: 'Task',
        content: '',
    });

    function extractDatesFromContent(content: string) {
        const regex =
            /\b\d{1,2}\/\d{1,2}\/\d{4}\b|\b\d{2}\.\d{2}\.\d{4}\b|\b\w+ \d{1,2}, \d{4}\b/g;
        const datesArray = content.match(regex);
        return datesArray ? datesArray.join(', ') : '';
    }

    const saveNoteHandler = (
        name: string,
        category: string,
        content: string
    ) => {
        if (editingId) {
            const editedNote: NoteType = {
                id: editingId,
                name: formData.name,
                created: new Date().toLocaleDateString(),
                category: formData.category,
                content: formData.content,
                dates: extractDatesFromContent(formData.content),
                archived: false,
            };
            dispatch(editNoteAction(editedNote, editingId));
        } else {
            const newNote: NoteType = {
                id: uuidv4(),
                name: formData.name,
                created: new Date().toLocaleDateString(),
                category: formData.category,
                content: formData.content,
                dates: extractDatesFromContent(formData.content),
                archived: false,
            };
            dispatch(addNoteAction(newNote));
        }
        onClose();
    };

    const formChangeHandler = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    useEffect(() => {
        if (editingId) {
            const noteToEdit = notes.find((note) => note.id === editingId);
            if (noteToEdit) {
                setFormData({
                    name: noteToEdit.name,
                    category: noteToEdit.category,
                    content: noteToEdit.content,
                });
            }
        } else {
            setFormData({
                name: '',
                category: 'Task',
                content: '',
            });
        }
    }, [editingId, notes]);

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>Create Note</h2>
                <form>
                    <label htmlFor="note-name">Name:</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={formChangeHandler}
                        required
                    />
                    <label htmlFor="note-category">Category:</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={formChangeHandler}
                        required
                    >
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                        <option value="Quote">Quote</option>
                    </select>
                    <label htmlFor="note-content">Content:</label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={formChangeHandler}
                        required
                    />
                    <button
                        type="button"
                        onClick={() =>
                            saveNoteHandler(
                                formData.name,
                                formData.category,
                                formData.content
                            )
                        }
                    >
                        Save Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NoteModal;

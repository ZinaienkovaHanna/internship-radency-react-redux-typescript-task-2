import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addNoteAction } from '../../store/action-creators/noteActions';
import { NoteType, FormData, ModalProps } from '../../types/notesTypes';

import './NoteModal.css';

const NoteModal: React.FC<ModalProps> = ({ onClose }) => {
    const dispatch = useDispatch();

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

    const AddNoteHandler = (
        name: string,
        category: string,
        content: string
    ) => {
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
                            AddNoteHandler(
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

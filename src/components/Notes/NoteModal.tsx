import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
    addNoteAction,
    editNoteAction,
} from '../../store/action-creators/noteActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { extractDatesFromContent } from '../../utils/utils';
import { NoteType, FormData, PropsNoteModal } from '../../types/notesTypes';

const NoteModal: React.FC<PropsNoteModal> = ({ onClose, editingId }) => {
    const dispatch = useDispatch();
    const { notes } = useTypedSelector((state) => state.notes);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        category: 'Task',
        content: '',
    });
    const [isNameEmpty, setIsNameEmpty] = useState<boolean>(false);
    const [isContentEmpty, setIsContentEmpty] = useState<boolean>(false);

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

    const saveNoteHandler = (
        name: string,
        category: string,
        content: string
    ) => {
        if (name.trim() && content.trim()) {
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
        } else {
            console.log('Name and content cannot be empty');
            setIsNameEmpty(!name.trim());
            setIsContentEmpty(!content.trim());
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsNameEmpty(false);
            setIsContentEmpty(false);
        }, 500);

        return () => clearTimeout(timeout);
    }, [isNameEmpty, isContentEmpty]);

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
        <div className="fixed top-0 left-0 bg-bg-modal w-full h-full ">
            <div className="absolute min-w-[600px] bg-bg-note top-1/2 left-1/2 p-16 transform -translate-x-1/2 -translate-y-1/2">
                <span
                    className="absolute top-3 right-6 text-3xl cursor-pointer hover:scale-125"
                    onClick={onClose}
                >
                    &times;
                </span>
                <h2 className="text-text-note text-xl font-bold">
                    Create Note
                </h2>
                <form className="flex flex-col">
                    <label
                        htmlFor="note-name"
                        className="text-text-note text-xl font-normal pt-4"
                    >
                        Name:
                    </label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={formChangeHandler}
                        className={`h-10 text-text-note text-base font-normal px-2 ${
                            isNameEmpty ? 'border-2 border-rose-600' : ''
                        }`}
                        required
                    />
                    <label
                        htmlFor="note-category"
                        className="text-text-note text-xl font-normal pt-4"
                    >
                        Category:
                    </label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={formChangeHandler}
                        required
                        className="text-text-note text-base font-normal p-2 h-10"
                    >
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                        <option value="Quote">Quote</option>
                    </select>
                    <label
                        htmlFor="note-content"
                        className="text-text-note text-xl font-normal pt-4"
                    >
                        Content:
                    </label>
                    <textarea
                        name="content"
                        value={formData.content}
                        onChange={formChangeHandler}
                        className={`text-text-note text-base font-normal p-2 h-15 ${
                            isContentEmpty ? 'border-2 border-rose-600' : ''
                        }`}
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
                        className="text-text-header bg-bg-header border-none px-8 py-3  cursor-pointer mt-3 hover:text-button-hover"
                    >
                        Save Note
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NoteModal;

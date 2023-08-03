import React from 'react';
import { useState } from 'react';
import NoteList from './components/NoteList/NoteList';
import NoteModal from './components/NoteModal/NoteModal';
import './App.css';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [noteIdForEditing, setNoteIdForEditing] = useState<string | null>(
        null
    );

    const openModalForCreate = () => {
        setIsModalOpen(true);
        setNoteIdForEditing(null);
    };

    const openModalForEdit = (id: string) => {
        setIsModalOpen(true);
        setNoteIdForEditing(id);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <NoteList onOpen={openModalForEdit} />
            <button onClick={openModalForCreate}>Create Note</button>
            {isModalOpen && (
                <NoteModal onClose={closeModal} editingId={noteIdForEditing} />
            )}
        </div>
    );
};

export default App;

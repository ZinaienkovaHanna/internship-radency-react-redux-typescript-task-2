import React from 'react';
import { useState } from 'react';
import NoteList from './components/NoteList/NoteList';
import NoteModal from './components/NoteModal/NoteModal';
import './App.css';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <NoteList />
            <button onClick={openModal}>Create Note</button>
            {isModalOpen && <NoteModal onClose={closeModal} />}
        </div>
    );
};

export default App;

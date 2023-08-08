import React, { useState } from 'react';
import NoteListTable from './components/Notes/NoteListTable';
import NoteManagementButtons from './components/Notes/NoteManagementButtons';
import NoteModal from './components/Notes/NoteModal';
import SummaryTable from './components/SummaryTable/SummaryTable';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [noteIdForEditing, setNoteIdForEditing] = useState<string | null>(
        null
    );
    const [showArchived, setShowArchived] = useState(false);

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
        <div className="font-montserrat m-0 p-0 box-border max-w-7xl py-10 mx-auto my-auto">
            <NoteListTable
                onOpen={openModalForEdit}
                showArchived={showArchived}
            />
            <NoteManagementButtons
                onOpen={openModalForCreate}
                showArchived={showArchived}
                setShowArchived={setShowArchived}
            />
            {isModalOpen && (
                <NoteModal onClose={closeModal} editingId={noteIdForEditing} />
            )}
            <SummaryTable />
        </div>
    );
};

export default App;

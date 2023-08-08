import React from 'react';
import { PropsNoteManagementButtons } from '../../types/notesTypes';

const NoteManagementButtons: React.FC<PropsNoteManagementButtons> = ({
    onOpen,
    showArchived,
    setShowArchived,
}) => {
    const toggleShowArchivedHandler = (archived: boolean) => {
        setShowArchived(archived);
    };

    return (
        <div className="flex justify-center w-10/12 mx-auto bg-bg-note mb-10">
            <button
                className={`text-2xl font-bold border-none px-8 py-4  cursor-pointer hover:text-button-hover ${
                    showArchived ? 'text-text-note' : 'text-button-hover'
                }`}
                onClick={() => toggleShowArchivedHandler(false)}
            >
                Active
            </button>
            <button
                className={`text-2xl font-bold border-none px-8 py-4  cursor-pointer hover:text-button-hover ${
                    showArchived ? 'text-button-hover' : 'text-text-note'
                }`}
                onClick={() => toggleShowArchivedHandler(true)}
            >
                Archive
            </button>
            <button
                onClick={onOpen}
                className="text-2xl font-bold text-text-note  border-none px-8 py-4  cursor-pointer hover:text-button-hover"
            >
                Create Note
            </button>
        </div>
    );
};

export default NoteManagementButtons;

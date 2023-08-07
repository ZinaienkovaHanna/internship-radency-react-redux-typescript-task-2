import React from 'react';
import { PropsNoteManagementButtons } from '../../types/notesTypes';

const NoteManagementButtons: React.FC<PropsNoteManagementButtons> = ({
    onOpen,
    showArchived,
    setShowArchived,
}) => {
    const filterHandler = (archived: boolean) => {
        setShowArchived(archived);
    };

    return (
        <div className="flex justify-center gap-5 py-5">
            <button
                className={`bg-bg-header border-none px-8 py-3  cursor-pointer hover:text-button-hover ${
                    showArchived ? 'text-text-header' : 'text-button-hover'
                }`}
                onClick={() => filterHandler(false)}
            >
                Active
            </button>
            <button
                className={`bg-bg-header border-none px-8 py-3  cursor-pointer hover:text-button-hover ${
                    showArchived ? 'text-button-hover' : 'text-text-header'
                }`}
                onClick={() => filterHandler(true)}
            >
                Archive
            </button>
            <button
                onClick={onOpen}
                className="text-text-header bg-bg-header border-none px-8 py-3  cursor-pointer hover:text-button-hover"
            >
                Create Note
            </button>
        </div>
    );
};

export default NoteManagementButtons;

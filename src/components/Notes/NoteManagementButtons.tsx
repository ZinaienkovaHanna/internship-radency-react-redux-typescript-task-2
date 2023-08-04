import React from 'react';
import { PropsNoteManagementButtons } from '../../types/notesTypes';

import './NoteManagementButtons.css';

const NoteManagementButtons: React.FC<PropsNoteManagementButtons> = ({
    onOpen,
    showArchived,
    setShowArchived,
}) => {
    const filterHandler = (archived: boolean) => {
        setShowArchived(archived);
    };

    return (
        <div className="btns-group">
            <button
                className={showArchived ? '' : 'active'}
                onClick={() => filterHandler(false)}
            >
                Active
            </button>
            <button
                className={showArchived ? 'active' : ''}
                onClick={() => filterHandler(true)}
            >
                Archive
            </button>
            <button onClick={onOpen}>Create Note</button>
        </div>
    );
};

export default NoteManagementButtons;

import React from 'react';
import { PropsNoteManagementButtons } from '../../types/notesTypes';

const NoteManagementButtons: React.FC<PropsNoteManagementButtons> = ({
    onOpen,
}) => {
    return (
        <div>
            <button>Active</button>
            <button>Archive</button>
            <button onClick={onOpen}>Create Note</button>
        </div>
    );
};

export default NoteManagementButtons;

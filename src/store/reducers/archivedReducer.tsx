// src/reducers/archivedReducer.ts

// Типи дій
const ARCHIVE_NOTE = 'ARCHIVE_NOTE';
const RESTORE_NOTE = 'RESTORE_NOTE';

// Тип для стану
interface ArchivedState {
    archivedNotes: number[]; // масив ідентифікаторів архівованих заміток
}

// Початковий стан для архівованих заміток
const initialState: ArchivedState = {
    archivedNotes: [],
};

// Редюсер для архівованих заміток
const archivedReducer = (state: ArchivedState = initialState, action: any) => {
    switch (action.type) {
        case ARCHIVE_NOTE:
            // Додаємо ідентифікатор архівованої замітки до масиву
            return {
                ...state,
                archivedNotes: [...state.archivedNotes, action.payload.id],
            };
        case RESTORE_NOTE:
            // Видаляємо ідентифікатор архівованої замітки з масиву
            return {
                ...state,
                archivedNotes: state.archivedNotes.filter(
                    (id) => id !== action.payload.id
                ),
            };
        default:
            return state;
    }
};

export default archivedReducer;

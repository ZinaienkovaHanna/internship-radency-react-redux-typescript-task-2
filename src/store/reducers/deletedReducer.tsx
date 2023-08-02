// src/reducers/deletedReducer.ts

// Типи дій
const DELETE_NOTE = 'DELETE_NOTE';
const RESTORE_NOTE = 'RESTORE_NOTE';

// Тип для стану
interface DeletedState {
    deletedNotes: number[]; // масив ідентифікаторів видалених заміток
}

// Початковий стан для видалених заміток
const initialState: DeletedState = {
    deletedNotes: [],
};

// Редюсер для видалених заміток
const deletedReducer = (state: DeletedState = initialState, action: any) => {
    switch (action.type) {
        case DELETE_NOTE:
            // Додаємо ідентифікатор видаленої замітки до масиву
            return {
                ...state,
                deletedNotes: [...state.deletedNotes, action.payload.id],
            };
        case RESTORE_NOTE:
            // Видаляємо ідентифікатор видаленої замітки з масиву
            return {
                ...state,
                deletedNotes: state.deletedNotes.filter(
                    (id) => id !== action.payload.id
                ),
            };
        default:
            return state;
    }
};

export default deletedReducer;

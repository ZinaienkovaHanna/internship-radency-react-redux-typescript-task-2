// src/reducers/addedReducer.ts

// Типи дій
const ADD_NOTE = 'ADD_NOTE';

// Тип для об'єкту замітки
interface Note {
    id: number;
    title: string;
    content: string;
}

// Тип для стану
interface AddedState {
    notes: Note[];
}

// Початковий стан для додавання замітки
const initialState: AddedState = {
    notes: [], // Початковий стан заміток - порожній масив
};

// Редюсер для додавання замітки
const addedReducer = (state: AddedState = initialState, action: any) => {
    switch (action.type) {
        case ADD_NOTE:
            // Створюємо нову замітку на основі даних з дії
            const newNote: Note = {
                id: action.payload.id,
                title: action.payload.title,
                content: action.payload.content,
            };
            // Повертаємо новий стан, додаючи нову замітку до масиву
            return {
                ...state,
                notes: [...state.notes, newNote],
            };
        default:
            return state;
    }
};

export default addedReducer;

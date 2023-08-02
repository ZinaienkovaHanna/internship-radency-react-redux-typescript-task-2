// src/reducers/rootReducer.ts
import { combineReducers } from 'redux';

import notesReducer from './notesReducer';
// import addedReducer from './addedReducer';
// import archivedReducer from './archivedReducer';
// import deletedReducer from './deletedReducer';

// const rootReducer = combineReducers({
//     added: addedReducer, // редюсер для додавання заміток
//     archived: archivedReducer, // редюсер для архівованих заміток
//     deleted: deletedReducer, // редюсер для видалених заміток
//     initialState: initialStateReducer,
// });

const rootReducer = combineReducers({
    notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

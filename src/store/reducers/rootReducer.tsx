// src/reducers/rootReducer.ts
import { combineReducers } from 'redux';

import notesReducer from './notesReducer';

const rootReducer = combineReducers({
    notes: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

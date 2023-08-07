import { combineReducers, configureStore } from '@reduxjs/toolkit';

import gameReducer from './reducers/gameReducer.ts';
import questionsReducer from './reducers/questionsReducer.ts';
import api from './services/api.ts';

const rootReducer = combineReducers({
  questions: questionsReducer,
  game: gameReducer,
  [api.reducerPath]: api.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
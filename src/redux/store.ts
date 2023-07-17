import { configureStore } from '@reduxjs/toolkit';

import api from './api/api.ts';
import gameReducer from './reducers/gameReducer.ts';
import questionsReducer from './reducers/questionsReducer.ts';

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    game: gameReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
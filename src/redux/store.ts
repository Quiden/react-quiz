import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsReducer.ts';
import gameReducer from './gameReducer.ts';

// const rootReducer = combineReducers({
//   questions: questionsReducer,
//   game: gameReducer,
// })

export const store = configureStore({
  reducer: {
    // reducer: rootReducer,
    questions: questionsReducer,
    game: gameReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
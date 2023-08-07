import { createSlice } from '@reduxjs/toolkit'

import { Answer } from '../services/questionsApi.ts';

interface Questions {
  questions: Array<Question>,
  isLoading: boolean,
  error: string
}

export interface Question {
  id: number,
  text: string,
  answers: Array<Answer>,
  correctAnswer: number
}

const initialState: Questions = {
  questions: [],
  isLoading: false,
  error: ""
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {}
});

export default questionsSlice.reducer;
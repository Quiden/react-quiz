import { createSlice } from '@reduxjs/toolkit'

import { Answer } from '../api/questionsApi.ts';

interface Questions {
  questions: Array<Question>
}

export interface Question {
  id: number,
  text: string,
  answers: Array<Answer>,
  correctAnswer: number
}

const initialState: Questions = {
  questions: [{
    id: 0,
    text: "string",
    answers: [
      { id: 1, text: "one" },
      { id: 2, text: "two" },
      { id: 3, text: "three" },
      { id: 4, text: "four" }
    ],
    correctAnswer: 4
  }]
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {}
});

export default questionsSlice.reducer;
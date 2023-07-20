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
    text: "Какая планета находится ближе всего к Солнцу?",
    answers: [
      { id: 1, text: "Земля" },
      { id: 2, text: "Марс" },
      { id: 3, text: "Меркурий" },
      { id: 4, text: "Венера" }
    ],
    correctAnswer: 3
  }, {
    id: 1,
    text: "Какая река протекает через Париж?",
    answers: [
      { id: 1, text: "Река Гудзон" },
      { id: 2, text: "Река Рейн" },
      { id: 3, text: "Река Сена" },
      { id: 4, text: "Река Миссисипи" }
    ],
    correctAnswer: 3
  }, {
    id: 2,
    text: "Сколько колец на олимпийском флаге?",
    answers: [
      { id: 1, text: "Семь" },
      { id: 2, text: "Шесть" },
      { id: 3, text: "Пять" },
      { id: 4, text: "Четыре" }
    ],
    correctAnswer: 3
  }, {
    id: 3,
    text: "Сколько стран находится внутри Соединенного Королевства?",
    answers: [
      { id: 1, text: "Три" },
      { id: 2, text: "Четыре" },
      { id: 3, text: "Пять" },
      { id: 4, text: "Шесть" }
    ],
    correctAnswer: 2
  }, {
    id: 4,
    text: "Какой самый большой континент в мире?",
    answers: [
      { id: 1, text: "Америка" },
      { id: 2, text: "Африка" },
      { id: 3, text: "Азия" },
      { id: 4, text: "Европа" }
    ],
    correctAnswer: 3
  }
  ]
};

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {}
});

export default questionsSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Game {
  rules: Array<string>,
  score: number
}

const initialState: Game = {
  rules: [
    "Players are simultaneously asked a question and given 30 seconds to answer. " +
      "The answer is accepted by the player who first chose the answer option. " +
      "There can be only one correct answer.",
    "If the answer turned out to be correct, the answering player receives points, and the rest of the" +
      "players do not receive anything, while they see the correct answer and the respondent. If the" +
      "answer turned out to be incorrect, then the respondent does not receive an answer points and" +
      "loses the opportunity to choose an option in this round, waiting for the others to answer.",
    "The round ends when one of the players gives the correct answer or the time allotted for the" +
      "answer in this round runs out. The game ends when the number of questions expires."],
  score: 0
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    increment(state) {
      state.score += 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.score += action.payload;
    },
    reset(state) {
      state.score = 0;
    }
  }
});

export const { increment, incrementByAmount, reset } = gameSlice.actions;

export default gameSlice.reducer;
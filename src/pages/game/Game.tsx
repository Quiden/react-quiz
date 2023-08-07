import { useState } from 'react';
import { EndGame } from './EndGame/EndGame.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';
import { increment, reset } from "../../redux/reducers/gameReducer.ts";
import { ProcessGame } from './ProcessGame/ProcessGame.tsx';
import { useGetAllQuestionsQuery } from '../../redux/services/questionsApi.ts';
import { Question } from '../../redux/reducers/questionsReducer.ts';

export const Game = () => {
  const { data: questions, error, isLoading } = useGetAllQuestionsQuery(10);
  // const { score } = useAppSelector(state => state.game);
  // const dispatch = useAppDispatch();

  // const [question, setQuestion] = useState(questions[0]);
  // const [count, setCount] = useState<number>(0);

  // const nextQuestion = () => {
  //   setCount((next) => next + 1);
  //   if (count < questions.length - 1) {
  //     setQuestion(questions[count + 1]);
  //   }
  // }

  // const onRightAnswer = () => {
  //   dispatch(increment());
  // }
  //
  // const resetScore = () => {
  //   dispatch(reset());
  // }

  return <>
    {!isLoading && <div></div>}
    {error && <div>Error</div>}
    {questions?.map((question) =>
      <div>
        {question.text}
      </div>
    )}
  </>
}
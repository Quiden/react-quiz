import { useEffect, useState } from 'react';
import { EndGame } from './EndGame/EndGame.tsx';
import { useAppDispatch, useAppSelector } from '../../hooks/redux.ts';
import { increment, reset } from "../../redux/reducers/gameReducer.ts";
import { ProcessGame } from './ProcessGame/ProcessGame.tsx';
import { useGetAllQuestionsQuery } from '../../redux/services/questionsApi.ts';
import styles from './Game.module.css';
import { Question } from '../../redux/reducers/questionsReducer.ts';
import { Error } from '../../components/common/Error/Error.tsx';

export const Game = () => {
  const numberOfQuestions = 10;
  const { data: questions, error, isLoading } = useGetAllQuestionsQuery(numberOfQuestions);
  const { score } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  const [question, setQuestion] = useState<Question>();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (questions) {
      setQuestion(questions[0]);
    }
  }, [questions]);

  const nextQuestion = () => {
    setCount((next) => next + 1);
    if (questions && (count < questions.length - 1)) {
      setQuestion(questions[count + 1]);
    }
  }

  const onRightAnswer = () => {
    dispatch(increment());
  }

  const resetScore = () => {
    dispatch(reset());
  }

  return <>
    <div className={styles.container}>
      <div className={styles.game}>
        {!isLoading && <div></div>}
        {error && <Error />}
        {
          !!questions && count >= questions.length ?
            <EndGame points={score} resetScore={resetScore} />:
            <ProcessGame count={count} numberOfQuestions={numberOfQuestions} score={score} question={question} nextQuestion={nextQuestion} onRightAnswer={onRightAnswer} />
        }
      </div>
    </div>
  </>
}
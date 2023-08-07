import { useEffect, useState } from 'react';
import { Selectors } from '../../../components/Selectors/Selectors.tsx';
import { EndGame } from '../EndGame/EndGame.tsx';
import styles from "./ProcessGame.module.css";
import { useAppDispatch, useAppSelector } from '../../../hooks/redux.ts';
import { increment, reset } from "../../../redux/reducers/gameReducer.ts";
import { useGetAllQuestionsQuery } from '../../../redux/services/api.ts';
import { Question } from '../../../redux/reducers/questionsReducer.ts';

export const ProcessGame = () => {
  const { data: questions, error, isLoading } = useGetAllQuestionsQuery(10);
  const { score } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  const [question, setQuestion] = useState<Question>();
  const [count, setCount] = useState<number>(0);

  const nextQuestion = () => {
    setCount((next) => next + 1);
    if (count < questions.length - 1) {
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
    {!isLoading && <div></div>}
    {error && <div>Error</div>}
    {count >= (questions && questions.length) ? <EndGame points={score} resetScore={resetScore} />:
      <div className={styles.game}>
        <div className={styles.container}>
          <h3 className={styles.title}>Question {count + 1}/{questions?.length}</h3>
          <h5 className={styles.score}>Points: {score}</h5>
          <p className={styles.text}>{question?.text}</p>
          <Selectors answers={question.answers} correctAnswer={question.correctAnswer} classNameForm={styles.form} nextQuestion={nextQuestion} onRightAnswer={onRightAnswer} />
        </div>
      </div>
    }
  </>
}
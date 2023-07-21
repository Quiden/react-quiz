import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux'

import { Form } from '../../../components/Form/Form.tsx';
import type { RootState } from '../../../redux/store.ts';
import { EndGame } from '../EndGame/EndGame.tsx';
import styles from "./ProcessGame.module.css";

export const ProcessGame = () => {
  const questions = useSelector((state: RootState) => state.questions.questions);
  const [question, setQuestion] = useState(questions[0]);
  const [count, setCount] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);

  const nextQuestion = () => {
    setCount((next) => next + 1);
    if (count < questions.length - 1) {
      setQuestion(questions[count + 1]);
    }
  }

  const increment = useCallback(() => {
    setPoints((count) => count + 1)
  }, []);

  return <>
    {count >= questions.length ? <EndGame points={points} />:
      <div className={styles.game}>
        <div className={styles.container}>
          <h3 className={styles.title}>Question {count + 1}/{questions.length}</h3>
          <h5 className={styles.score}>Points: {points}</h5>
          <p className={styles.text}>{question.text}</p>
          <Form answers={question.answers} correctAnswer={question.correctAnswer} classNameForm={styles.form} nextQuestion={nextQuestion} increment={increment} />
        </div>
      </div>
    }
  </>
}
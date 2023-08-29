import { FunctionComponent } from 'react';

import { Selectors } from '../../../components/Selectors/Selectors.tsx';
import { Question } from '../../../redux/reducers/questionsReducer.ts';
import styles from "./ProcessGame.module.css";

interface Props {
  count: number,
  numberOfQuestions: number,
  score: number,
  question: Question | undefined
  nextQuestion: () => void,
  onRightAnswer: () => void
}

export const ProcessGame: FunctionComponent<Props> = ({
  count,
  numberOfQuestions,
  score,
  question,
  nextQuestion,
  onRightAnswer
}) => {
  return <>
    <div className={styles.container}>
      <h3 className={styles.title}>Question {count + 1}/{numberOfQuestions}</h3>
      <h5 className={styles.score}>Points: {score}</h5>
      <p className={styles.text}>{question?.text}</p>
      <Selectors answers={question?.answers} correctAnswer={question?.correctAnswer} classNameForm={styles.form} nextQuestion={nextQuestion} onRightAnswer={onRightAnswer} />
    </div>
  </>
}
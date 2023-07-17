import { useSelector } from 'react-redux'

import { Form } from '../../components/Form/Form.tsx';
import type { RootState } from '../../redux/store.ts';

import styles from "./ProcessGame.module.css";

export const ProcessGame = () => {
  const question = useSelector((state: RootState) => state.questions.questions[0]);

  return <div className={styles.game}>
    <div className={styles.container}>
      <h3 className={styles.title}>Question 1</h3>
      <h5 className={styles.score}>Points: {0}</h5>
      <p className={styles.text}>{question.text}</p>
      <Form answers={question.answers} classNameForm={styles.form} />
    </div>
  </div>
}
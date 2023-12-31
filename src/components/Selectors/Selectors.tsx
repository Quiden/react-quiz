import * as classNames from 'classnames';
import {FunctionComponent, useState} from 'react';

import { Answer } from '../../redux/services/questionsApi.ts';
import { Button } from '../common/Buttons/Button/Button.tsx';
import styles from "./Selectors.module.css";

interface Props {
  answers: Array<Answer> | undefined,
  correctAnswer: number | undefined,
  classNameForm: string,
  nextQuestion: () => void,
  onRightAnswer: () => void
}

export const Selectors: FunctionComponent<Props> = ({ answers, correctAnswer, classNameForm, nextQuestion, onRightAnswer }) => {
  const [selectedAnswer, setSelectorAnswer] = useState<number>();
  const [answered, setAnswered] = useState<boolean>(false);

  const onAnswer = () => {
    if (correctAnswer === selectedAnswer) {
      onRightAnswer();
    }
    setAnswered(true);
  }

  const onNext = () => {
    setAnswered(false);
    setSelectorAnswer(undefined);
    nextQuestion();
  }

   return (
    <div className={classNames(styles.form, classNameForm)}>
      <div className={styles.select}>
        {answers?.map((answer) => {
          return <Button key={answer.id} className={classNames(
            "answerButton",
            selectedAnswer === answer.id && !answered && "active",
            selectedAnswer === answer.id && answered && "right",
            correctAnswer === answer.id && answered && "wrong",
          )} onClick={() => setSelectorAnswer(answer.id)} disabled={answered} text={answer.text} />
        })
        }
      </div>
      {
        answered ? <Button className="gameButton" onClick={onNext} disabled={false} text={"Next"} />:
        <Button className="gameButton" onClick={onAnswer} disabled={selectedAnswer === undefined} text={"Answer"}/>
      }
      <p className={classNames(styles.point, answered && styles.active)}>You got {correctAnswer === selectedAnswer ? 1: 0} points</p>
    </div>
  );
}
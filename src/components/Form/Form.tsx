import * as classNames from 'classnames';
import {FunctionComponent, useState} from 'react';

import { Answer } from '../../redux/api/questionsApi.ts';
import { Button } from '../common/Buttons/Button/Button.tsx';
import styles from "./Form.module.css";

interface Props {
  answers: Array<Answer>,
  correctAnswer: number,
  classNameForm: string,
  nextQuestion: () => void,
  increment: () => void
}

export const Form: FunctionComponent<Props> = ({ answers, correctAnswer, classNameForm, nextQuestion, increment }) => {
  const [selectedAnswer, setSelectorAnswer] = useState<number>();
  const [answered, setAnswered] = useState<boolean>(false);

  const onAnswer = () => {
    if (correctAnswer === selectedAnswer) {
      increment();
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
        answered ? <Button className="nextQuestion" onClick={onNext} disabled={false} text={"Next"} />:
        <Button className="gameButton" onClick={onAnswer} disabled={selectedAnswer === undefined} text={"Answer"}/>
      }
    </div>
  );
}
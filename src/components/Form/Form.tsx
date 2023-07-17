import { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';

import { Answer } from '../../redux/api/questionsApi.ts';
import { Button } from '../common/Button/Button.tsx';

import styles from "./Form.module.css";
import * as classNames from 'classnames';

interface Props {
  answers: Array<Answer>,
  classNameForm: string
}

type Inputs = {
  answer: Answer
}

export const Form: FunctionComponent<Props> = ({ answers, classNameForm }) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return <form className={classNames(styles.form, classNameForm)} onSubmit={handleSubmit(((data) => onSubmit(data)))}>
    <ul className={styles.select} {...register("answer", { required: true})} >
      {answers?.map((answer) => {
        return <div key={answer.id} className={styles.container}>
          <li className={styles.option} value={answer.id}>{answer.text}</li>
        </div>
        })
      }
    </ul>
    <Button className={styles.button} onClick={() => {"text"}} disabled={true} text={"Answer"}/>
  </form>
}
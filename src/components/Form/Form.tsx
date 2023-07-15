import { useForm } from 'react-hook-form';
import { FunctionComponent } from 'react';
import { Answer } from '../../redux/api/questionsApi.ts';

interface Props {
  answers: Array<Answer>
}

type Inputs = {
  answer: Answer
}

export const Form: FunctionComponent<Props> = ({ answers }) => {
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  return <form onSubmit={ handleSubmit((data) => console.log(data)) }>
    <select {...register("answer", { required: true})} >
      {answers?.map((answer) => {
        return <option value={answer.id}>{answer.text}</option>
        })
      }
    </select>
    <input type="submit" value="Answer" />
  </form>
}
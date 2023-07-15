import { Form } from '../../components/Form/Form.tsx';
import type { RootState } from '../../redux/store.ts';
import { useSelector } from 'react-redux'

export const ProcessGame = () => {
  const answers = useSelector((state: RootState) => state.questions.questions[0].answers);

  return <div>
    <Form answers={answers} />
  </div>
}
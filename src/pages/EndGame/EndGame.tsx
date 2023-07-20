import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Buttons/Button/Button.tsx';
import styles from "./EndGame.module.css";

interface Props {
  points: number
}

export const EndGame: FunctionComponent<Props> = ({ points }) => {
  return <>
    <div>
      <h1>Game finished</h1>
      <h3>Score: {points} points</h3>
      <Link to="/start">
        <Button className={styles.endGame} onClick={() => {""}} disabled={false} text={"Play again"} />
      </Link>
    </div>

  </>;
}
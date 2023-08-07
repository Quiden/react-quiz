import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../../components/common/Buttons/Button/Button.tsx';
import styles from "./EndGame.module.css";

interface Props {
  points: number,
  resetScore: () => void
}

export const EndGame: FunctionComponent<Props> = ({ points, resetScore }) => {
  return <section className={styles.endGame}>
    <h1 className={styles.title}>Game finished</h1>
    <h3 className={styles.score}>Score: {points} points</h3>
    <Link className={styles.link} to="/">
      <Button className={"gameButton"} onClick={resetScore} disabled={false} text={"Play again"} />
    </Link>
  </section>;
}
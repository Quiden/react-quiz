import { useSelector } from 'react-redux';

import { Button } from '../../components/common/Buttons/Button/Button.tsx';
import { RootState } from '../../redux/store.ts';
import styles from "./StartGame.module.css";
import { Link } from 'react-router-dom';

export const StartGame = () => {
  const rules = useSelector((state: RootState) => state.game.rules);

  return <>
    <div className={styles.startGame}>
      <div className={styles.container}>
        <h3 className={styles.header}>Game rules</h3>
        <div className={styles.rules}>
          {rules?.map((rule) => (
            <p className={styles.rule}>{rule}</p>
          ))}
        </div>
        <Link to={"/game"}>
          <Button className={"gameButton"} disabled={false} text={"Start"} />
        </Link>
      </div>
    </div>
  </>;
}
import { useSelector } from 'react-redux';

import { Button } from '../../components/common/Button/Button.tsx';
import { RootState } from '../../redux/store.ts';
import styles from "./StartGame.module.css";

export const StartGame = () => {
  const rules = useSelector((state: RootState) => state.game.rules);

  return <>
    <div className={styles.startGame}>
      <div className={styles.container}>
        <h3 className={styles.header}>Game rules</h3>
        {rules?.map((rule) => (
          <p className={styles.rule}>{rule}</p>
        ))}
        <Button className={styles.button} onClick={() => {console.log("great!")}} disabled={true} text={"Start"} />
      </div>
    </div>
  </>;
}
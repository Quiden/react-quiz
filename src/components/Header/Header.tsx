import styles from "./Header.module.css";
import { Popup } from '../common/Popup/Popup.tsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store.ts';

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const rules = useSelector((state: RootState) => state.game.rules);

  return <header className={styles.header}>
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Quizen</h2>
      </div>
      <div>
        <button className={styles.gameRules} onClick={() => setModalActive(true)}>Game rules</button>
      </div>
    </div>
    <Popup active={modalActive} setActive={setModalActive}>
      <button></button>
      <h3 className={styles.titleRules}>Game rules</h3>
      <div className={styles.rules}>
        {rules?.map((rule) => (
          <p className={styles.rule}>{rule}</p>
        ))}
      </div>
    </Popup>
  </header>;
};

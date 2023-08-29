import { useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store.ts';
import { CloseButton } from '../common/Buttons/CloseButton/CloseButton.tsx';
import { Popup } from '../common/Popup/Popup.tsx';
import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import { createPortal } from 'react-dom';

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const rules = useSelector((state: RootState) => state.game.rules);

  return <header className={styles.header}>
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <h2 className={styles.title}>Quizen</h2>
      </Link>
      <div>
        <button className={styles.gameRules} onClick={() => setModalActive(true)}>Game rules</button>
      </div>
    </div>
    {modalActive && createPortal(
        <Popup active={modalActive} setActive={setModalActive}>
          <CloseButton setActive={setModalActive} />
          <h3 className={styles.titleRules}>Game rules</h3>
          <div className={styles.rules}>
            {rules?.map((rule) => (
              <p className={styles.rule}>{rule}</p>
            ))}
          </div>
        </Popup>,
        document.getElementById("portal")!
      )
    }
  </header>;
};

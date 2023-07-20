import * as classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from "./Popup.module.css";


interface Props {
  active: boolean,
  setActive: (count: boolean) => void,
  children: React.ReactNode
}

export const Popup: FunctionComponent<Props> = ({ active, setActive, children }) => {
  return <div className={classNames(styles.modal, active && styles.active)} onClick={() => setActive(false)}>
    <div className={classNames(styles.content, active && styles.active)} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>
}
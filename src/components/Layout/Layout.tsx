import React, { FunctionComponent } from 'react';

import styles from "./Layout.module.css";

interface Props {
  children: React.ReactNode
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return <main className={styles.main}>
    <div className={styles.container}>
      {children}
    </div>
  </main>;
}
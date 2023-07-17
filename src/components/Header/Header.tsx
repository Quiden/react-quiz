import styles from "./Header.module.css";

export const Header = () => {
  return <header className={styles.header}>
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Quizen</h2>
      </div>
      <div>
        <p>Game rules</p>
      </div>
    </div>
  </header>;
};

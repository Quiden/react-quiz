import styles from "./Header.module.css";

export const Header = () => {
  return <header className={styles.header}>
    <div className={styles.container}>
      <div>
        <h1>Quiz</h1>
      </div>
      <div>
        <p>Game rules</p>
      </div>
    </div>
  </header>;
};

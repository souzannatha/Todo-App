import styles from "./tasks.module.css";

export function Tasks() {
  return (
    <section>
      <div className={styles.taksContainer}>
        <div className={styles.taksHeader}>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div className={styles.taksHeader}>
          <p className={styles.textPurple}>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </div>
    </section>
  );
}

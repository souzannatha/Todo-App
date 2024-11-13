import { TbTrash } from "react-icons/tb";
import styles from "./task.module.css";

export function Task() {
  return (
    <div className={styles.listTask}>
      <button>
        <div className={styles.circle} />
      </button>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <TbTrash size={24} color="#808080" />
    </div>
  );
}

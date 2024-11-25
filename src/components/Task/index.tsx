import { TbTrash } from "react-icons/tb";
import styles from "./task.module.css";
import { ITask } from "../../App";
import { BsFillCheckCircleFill } from "react-icons/bs";

interface TaskProps {
  task: ITask;
  onDeleteTask: (id: string) => void;
  onToggleTaskCompleted: (id: string) => void;
}

export function Task({ task, onDeleteTask, onToggleTaskCompleted }: TaskProps) {
  function handleDelete() {
    onDeleteTask(task.id);
  }

  return (
    <div className={styles.listTask}>
      <button
        className={styles.checkContainer}
        onClick={() => onToggleTaskCompleted(task.id)}
      >
        {task.isCompleted ? (
          <BsFillCheckCircleFill size={20} />
        ) : (
          <div className={styles.circle} />
        )}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ""}>
        {task.title}
      </p>
      <div className={styles.trash}>
        <TbTrash size={24} color="#808080" onClick={handleDelete} />
      </div>
    </div>
  );
}

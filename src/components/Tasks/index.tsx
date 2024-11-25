import { TbClipboardText } from "react-icons/tb";
import { ITask } from "../../App";
import { Task } from "../Task";
import styles from "./tasks.module.css";

interface TasksProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onToggleTaskCompleted: (id: string) => void;
}

export function Tasks({
  tasks,
  onDeleteTask,
  onToggleTaskCompleted,
}: TasksProps) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section>
      <div className={styles.taksContainer}>
        <div className={styles.taksHeader}>
          <p>Tarefas criadas</p>
          <span>{totalTasks}</span>
        </div>
        <div className={styles.taksHeader}>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {totalTasks}
          </span>
        </div>
      </div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={onDeleteTask}
          onToggleTaskCompleted={onToggleTaskCompleted}
        />
      ))}
      {tasks.length <= 0 && (
        <section className={styles.empty}>
          <TbClipboardText size={50} />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </section>
      )}
    </section>
  );
}

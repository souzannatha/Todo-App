import { useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import { v4 as uuidv4 } from "uuid";

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function handleAddTask(title: string) {
    const newTask: ITask = {
      id: uuidv4(),
      title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function handleDeleteTask(id: string) {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  }

  function handleToggleTaskCompled(id: string) {
    const updatedTask = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTask);
  }
  return (
    <>
      <Header onAddTask={handleAddTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTaskCompleted={handleToggleTaskCompled}
      />
    </>
  );
}

export default App;

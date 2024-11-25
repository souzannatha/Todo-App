import styles from "./header.module.css";
import todoLogo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { ChangeEvent, FormEvent, useState } from "react";

interface HeaderProps {
  onAddTask: (title: string) => void;
}

export function Header({ onAddTask }: HeaderProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function handeChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma tarefa"
          onChange={handeChange}
          value={title}
        />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

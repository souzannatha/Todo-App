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

    if (!title.trim()) {
      alert("Digite sua tarefa!");
      return;
    }

    onAddTask(title);
    setTitle(""); // Limpa o campo de entrada após adicionar a tarefa
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="Logo Todo" />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma tarefa"
          onChange={handleChange}
          value={title}
        />
        <button
          type="submit"
          disabled={!title.trim()}
          className={!title.trim() ? styles.disabledButton : ""}
        >
          Criar
          <AiOutlinePlusCircle size={20} color="#fff" />
        </button>
      </form>
    </header>
  );
}

import styles from "./header.module.css";
import todoLogo from "../../assets/Logo.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form className={styles.formContainer}>
        <input placeholder="Adicione uma tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

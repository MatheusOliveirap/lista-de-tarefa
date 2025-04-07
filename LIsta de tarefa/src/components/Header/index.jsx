import Logo from "../../assets/Logo.png";
import { CirclePlus } from "lucide-react";

import "./styles.css";

export function Header() {
  return (
    <header className="topo">
      <img src={Logo} alt="" />

      <div className="actions">
        <input type="text" placeholder="   Adicione uma nova tarefa" />
        <button>
          <CirclePlus />
        </button>
      </div>
    </header>
  );
}

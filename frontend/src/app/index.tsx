import style from "./index.module.scss";
import { useState } from "react";
import { Lembrete } from "../types/lembrete";
import NovoLembrete from "../components/NovoLembrete/index.tsx";
import ListarLembretes from "../components/ListarLembretes/index.tsx";

function index() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([
    // { nome: "abc", data: 1234000000000 }, // Para fins de teste
    // { nome: "cba", data: 2234000000000 }, // Para fins de teste
    // { nome: "cba", data: 2234000000000 }, // Para fins de teste
    // { nome: "cba", data: 2234000000000 }, // Para fins de teste
  ]);

  function addLembrete(fields: Lembrete) {
    setLembretes([
      ...lembretes,
      {
        nome: fields.nome,
        data: fields.data,
      },
    ]);
  }

  return (
    <div className={style.grid}>
      <aside className={style.asideBar}>
        <NovoLembrete onClick={addLembrete} />
      </aside>
      <main>
        <ListarLembretes lembretes={lembretes} />
      </main>
    </div>
  );
}

export default index;

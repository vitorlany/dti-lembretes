import "./index.module.scss";

import { useState } from "react";
import { Lembrete } from "../types/lembrete";
import NovoLembrete from "../components/NovoLembrete/index.tsx";
import ListarLembretes from "../components/ListarLembretes/index.tsx";

function index() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

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
    <>
      <NovoLembrete onCLick={addLembrete} />
      <ListarLembretes lembretes={lembretes} />
    </>
  );
}

export default index;

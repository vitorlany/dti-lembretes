import "./index.module.scss";

import { useState } from "react";
import moment from "moment";
import { Lembrete } from "../types/lembrete";
import NovoLembrete from "../components/NovoLembrete/index.tsx";

let calendarFormat = {
  sameDay: "[Today], DD",
  nextDay: "[Tomorrow], DD",
  nextWeek: "dddd",
  lastDay: "[Yesterday]",
  lastWeek: "[Last] dddd",
  sameElse: "DD/MM/YYYY",
};

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
      <h1>Lista de lembretes</h1>
      {lembretes.map(({ data, nome }) => (
        <article>
          <time dateTime={moment(data).format("YYYY-MM-DD")}>
            {moment(data).calendar(null, calendarFormat)}
          </time>
          <p>{nome}</p>
        </article>
      ))}
    </>
  );
}

export default index;

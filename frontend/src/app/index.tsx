import "./index.module.scss";

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import moment from "moment";

interface Lembrete {
  nome: string;
  data: number;
}

const validateDateAfterToday = (inputDate: any) => {
  let input = new Date(inputDate);
  let now = new Date();
  input.setHours(24, 0, 0, 0);
  now.setHours(0, 0, 0, 0);
  return input.getTime() > now.getTime();
};

let calendarFormat = {
  sameDay: "[Today], DD",
  nextDay: "[Tomorrow], DD",
  nextWeek: "dddd",
  lastDay: "[Yesterday]",
  lastWeek: "[Last] dddd",
  sameElse: "DD/MM/YYYY",
};

function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [lembretes, setLembretes] = useState<Lembrete[]>([]);

  const handleCriar = async (fields: FieldValues) => {
    setLembretes([
      ...lembretes,
      {
        nome: fields.nome,
        data: fields.data,
      },
    ]);
  };

  return (
    <>
      <h1>Novo lembrete</h1>
      <form onSubmit={handleSubmit(handleCriar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            {...register("nome", {
              required: "Favor informar um nome para continuar",
            })}
          />
          <ErrorMessage
            errors={errors}
            name="nome"
            render={({ message }) => <p>{message}</p>}
          />
        </div>
        <div>
          <label htmlFor="data">Data</label>
          <input
            type="date"
            {...register("data", {
              required: "A data deve ser superior ao dia de hoje",
              validate: validateDateAfterToday,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="data"
            render={({ message }) => <p>{message}</p>}
          />
        </div>
        <button type="submit">Criar</button>
      </form>
      {/*  */}
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

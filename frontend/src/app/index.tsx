import "./index.module.scss";

import { FieldValues, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const handleCriar = async (fields: FieldValues) => {
  console.log(fields);
};

function index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const validateDate = (inputDate: any) => {
    let input = new Date(inputDate).setHours(0, 0, 0, 0);
    let now = new Date().setHours(0, 0, 0, 0);
    return input > now;
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
              validate: validateDate,
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
      <article>
        <time dateTime="2024-01-01">01/01/2024</time>
        <p>Vídeo de estatística</p>
      </article>
    </>
  );
}

export default index;

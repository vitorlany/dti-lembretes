import './index.module.scss'

import { FieldValues, useForm } from "react-hook-form";

const handleCriar = async (fields: FieldValues) => {
  console.log(fields)
}

function index() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <h1>Novo lembrete</h1>
      <form onSubmit={handleSubmit(handleCriar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" {...register("nome")} />
        </div>
        <div>
          <label htmlFor="data">Data</label>
          <input type="date" {...register("data")} />
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
  )
}

export default index

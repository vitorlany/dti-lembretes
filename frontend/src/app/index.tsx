import './index.module.scss'

import { FormEvent } from 'react';

const handleCriar = async (event: FormEvent) => {
  event.preventDefault()
}

function index() {
  return (
    <>
      <h1>Novo lembrete</h1>
      <form onSubmit={handleCriar}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" />
        </div>
        <div>
          <label htmlFor="data">Data</label>
          <input type="date" id="data" />
        </div>
        <button type="submit">Criar</button>
      </form>
      {/*  */}
      <h1>Lista de lembretes</h1>
      <article>
        <time dateTime="2024-01-01">01/01/2023</time>
        <p>Vídeo de estatística</p>
      </article>
    </>
  )
}

export default index

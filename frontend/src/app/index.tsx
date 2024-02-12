import style from "./index.module.scss";
import { useState, useEffect } from "react";
import { Lembrete } from "../types/lembrete";
import { NovoLembrete } from "../components/NovoLembrete/index.tsx";
import { ListarLembretes } from "../components/ListarLembretes/index.tsx";
import { createLembrete, deleteLembretes, getLembretes } from "../services/apiService.ts";

function index() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([])

  async function fetchLembretes() {
    try {
      const lembretesFromServer = await getLembretes()
      setLembretes(lembretesFromServer)
    } catch (error) {
      console.error("Erro ao buscar lembretes:", error)
    }
  }

  async function sendLembrete(lembrete: Lembrete) {
    try {
      return await createLembrete(lembrete)
    } catch (error) {
      console.error("Erro ao buscar lembretes:", error)
    }
  }

  useEffect(() => {
    fetchLembretes()
  }, [])

  function addLembrete(fields: Lembrete) {
    async function setData() {
      setLembretes([
        ...lembretes,
        await sendLembrete(fields),
      ])
    }
    setData()
  }

  function delLembrete(id: number) {
    async function sendData() {
      await deleteLembretes(id)
      await fetchLembretes()
    }
    sendData()
  }

  return (
    <div className={style.grid}>
      <aside className={style.asideBar}>
        <NovoLembrete onClick={addLembrete} />
      </aside>
      <main>
        <ListarLembretes lembretes={lembretes} onDelete={delLembrete} />
      </main>
    </div>
  );
}

export default index;

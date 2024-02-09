import style from "./index.module.scss";
import { useState } from "react";
import { Lembrete } from "../types/lembrete";
import NovoLembrete from "../components/NovoLembrete/index.tsx";
import ListarLembretes from "../components/ListarLembretes/index.tsx";

function index() {
  const [lembretes, setLembretes] = useState<Lembrete[]>([
    {
      nome: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique sapiente inventore aut eum qui pariatur mollitia excepturi veritatis dolorum. Enim explicabo pariatur veniam aperiam repellat modi! Iste fuga dolorum sequi officia aliquam provident libero, reiciendis nulla. Voluptas, quaerat. Dolor a labore, iusto nostrum, corrupti alias quae id quisquam et officia deleniti dolore eligendi placeat doloribus consequatur quam quibusdam neque nam itaque? Amet, modi laudantium! Voluptatibus quia corrupti dolorum ratione in eum ipsam praesentium possimus similique, officia ex nostrum amet temporibus. Expedita enim ducimus sunt consequatur dicta accusamus odit distinctio error.",
      data: "2024-02-17",
    },
  ]);

  function addLembrete(fields: Lembrete) {
    console.log(fields)
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

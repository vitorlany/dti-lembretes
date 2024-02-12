import style from "./index.module.scss";
import { Lembrete } from "../../types/lembrete";
import { IoMdClose } from "react-icons/io";
import moment from "moment";

interface Props {
  lembretes: Lembrete[];
  onDelete: (id: number) => void;
}

export function ListarLembretes(props: Props) {
  let grouped = props.lembretes.reduce((r: any, a: any) => {
    r[a.date] = [...(r[a.date] || []), a];
    return r;
  }, {});

  // ordem cronológica
  grouped = Object.fromEntries(Object.entries(grouped).sort());

  let dataArray = Object.keys(grouped);

  return (
    <div>
      <h1>Lista de lembretes</h1>
      {dataArray.length > 0 ? (
        dataArray.map((obj) => {
          return (
            <>
              <h2 className="mb-1">{moment(obj).format("LL")}</h2>
              <hr style={{marginTop: -32}} className="mb-2"/>
              {grouped[obj].map((lembrete: Lembrete) => (
                <article className={`${style.card} mb-2 ${style.articleGrid}`}>
                  <p>{lembrete.name}</p>
                  {lembrete.id && (
                    <button style={{aspectRatio : 1}}
                      onClick={() => {
                        if (lembrete.id) props.onDelete(lembrete.id);
                      }}
                    >
                      <IoMdClose />
                    </button>
                  )}
                </article>
              ))}
            </>
          );
        })
      ) : (
        <p>Nada foi feito ainda 😢</p>
      )}
    </div>
  );
}

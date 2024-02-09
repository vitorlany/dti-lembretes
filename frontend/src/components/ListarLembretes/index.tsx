import style from "./index.module.scss";
import { Lembrete } from "../../types/lembrete";
import moment from "moment";

interface Props {
  lembretes: Lembrete[];
}

function index(props: Props) {
  let grouped = props.lembretes.reduce((r: any, a: any) => {
    r[a.data] = [...(r[a.data] || []), a];
    return r;
  }, {});

  let dataArray = Object.keys(grouped);

  return (
    <div>
      <h1>Lista de lembretes</h1>
      {dataArray.length > 0 ? (
        dataArray.map((obj) => {
          return (
            <>
              <h2 className="mb-1">{moment(obj).format('LL')}</h2>
              {grouped[obj].map((lembrete: Lembrete) => (
                <article className={`${style.card} mb-2`}>
                  <p>{lembrete.nome}</p>
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

export default index;

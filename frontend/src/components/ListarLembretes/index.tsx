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
              <time dateTime={moment(obj).format("YYYY-MM-DD")}>
                {moment(obj).calendar()} 
                {/* mudar formatação */}
              </time>
              {grouped[obj].map((lembrete: Lembrete) => (
                <article className={style.card}>
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

// lembretes.map(({ data, nome }) => (
//   <article className={style.card}>
//     <time dateTime={moment(data).format("YYYY-MM-DD")}>
//       {moment(data).calendar(null, calendarFormat)}
//     </time>
//     <p>{nome}</p>
//   </article>
// ))

export default index;

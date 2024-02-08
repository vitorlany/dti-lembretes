import { Lembrete } from "../../types/lembrete";
import moment from "moment";

let calendarFormat = {
  sameDay: "[Today], DD",
  nextDay: "[Tomorrow], DD",
  nextWeek: "dddd",
  lastDay: "[Yesterday]",
  lastWeek: "[Last] dddd",
  sameElse: "DD/MM/YYYY",
};

interface Props {
  lembretes: Lembrete[];
}

function index(props: Props) {
  let lembretes = props.lembretes;
  return (
    <div>
      <h1>Lista de lembretes</h1>
      {lembretes.length > 0 ? (
        lembretes.map(({ data, nome }) => (
          <article>
            <time dateTime={moment(data).format("YYYY-MM-DD")}>
              {moment(data).calendar(null, calendarFormat)}
            </time>
            <p>{nome}</p>
          </article>
        ))
      ) : (
        <p>Nada foi feito ainda 😢</p>
      )}
    </div>
  );
}

export default index;

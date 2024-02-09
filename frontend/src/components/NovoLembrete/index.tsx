import { FieldValues, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Lembrete } from "../../types/lembrete";
import moment from "moment";

const validateDateAfterToday = (inputDate: any) => {
  let input = moment(inputDate)
  let now = moment()
  return (
    input > now || "A data deve ser superior ao dia de hoje"
  );
};

interface Props {
  onClick: (lembrete: Lembrete) => void;
}

function index(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCriar = async (fields: FieldValues) => {
    props.onClick({
      nome: fields.nome,
      data: moment(fields.data).toISOString(),
    });
  };

  return (
    <div>
      <h1>Novo lembrete</h1>
      <form onSubmit={handleSubmit(handleCriar)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            placeholder="Insira o nome do lembrete"
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
              required: "A data deve ser selecionada",
              validate: validateDateAfterToday,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="data"
            render={({ message }) => <p>{message}</p>}
          />
        </div>
        <button className="mt-1" type="submit">Criar</button>
      </form>
    </div>
  );
}

export default index;

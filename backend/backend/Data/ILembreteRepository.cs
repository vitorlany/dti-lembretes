using backend.Entity;

namespace backend.Data
{
    public interface ILembreteRepository
    {
        Lembrete[] ListarTodos();

        Lembrete Adicionar(Lembrete lembrete);

        bool Deletar(long id);
    }
}

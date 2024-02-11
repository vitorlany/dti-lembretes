using backend.Entity;

namespace backend.Data
{
    public interface ILembreteRepository
    {
        IEnumerable<Lembrete> ListarTodos();
        Lembrete Adicionar(Lembrete lembrete);
        bool Deletar(long id);
    }
}

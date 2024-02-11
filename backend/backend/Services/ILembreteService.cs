using backend.Entity;

namespace backend.Services
{
    public interface ILembreteService
    {
        IEnumerable<Lembrete> ListarTodosLembretes();
        Lembrete AdicionarLembrete(Lembrete lembrete);
        bool DeletarLembrete(long id);
    }
}

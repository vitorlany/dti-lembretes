using backend.Entity;

namespace backend.Data
{
    public class LembreteRepository : ILembreteRepository
    {
        public readonly DataContext _dataContext;

        public LembreteRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<Lembrete> ListarTodos()
        {
            return _dataContext.Lembretes.ToList();
        }

        public Lembrete Adicionar(Lembrete lembrete)
        {
            _dataContext.Lembretes.Add(lembrete);
            _dataContext.SaveChanges();
            return lembrete;
        }

        public bool Deletar(long id)
        {
            Lembrete? lembrete = _dataContext.Lembretes.Find(id);
            if (lembrete != null)
            {
                _dataContext.Lembretes.Remove(lembrete);
                _dataContext.SaveChanges();
                return true;
            }
            return false;
        }
    }
}

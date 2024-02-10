using backend.Controllers;
using backend.Data;
using backend.Entity;

namespace backend.Services
{
    public class LembreteService : ILembreteService
    {
        private readonly ILogger<LembreteController> _logger;
        private readonly ILembreteRepository lembreteRepository;

        public LembreteService(ILogger<LembreteController> logger, ILembreteRepository lembreteRepository)
        {
            _logger = logger;
            this.lembreteRepository = lembreteRepository;
        }

        public Lembrete AdicionarLembrete(Lembrete lembrete)
        {
            _logger.LogInformation($"Lembrete adicionardo ({lembrete.Id})");
            return lembreteRepository.Adicionar(lembrete);
        }

        public bool DeletarLembrete(long id)
        {
            var res = lembreteRepository.Deletar(id);
            if (res) _logger.LogInformation($"Lembrete removido ({id})");
            return res;
        }

        public IEnumerable<Lembrete> ListarTodosLembretes()
        {
            return lembreteRepository.ListarTodos();
        }
    }
}

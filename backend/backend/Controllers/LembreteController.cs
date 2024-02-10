using Microsoft.AspNetCore.Mvc;
using backend.Entity;
using backend.Controllers.DTOs;
using backend.Data;
namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LembreteController : ControllerBase
    {
        private readonly ILogger<LembreteController> _logger;
        private readonly ILembreteRepository lembreteRepository;

        public LembreteController(ILogger<LembreteController> logger, ILembreteRepository lembreteRepository)
        {
            _logger = logger;
            this.lembreteRepository = lembreteRepository;
        }

        [HttpGet(Name = "ListarTodos")]
        public IEnumerable<Lembrete> ListarTodos()
        {
            return lembreteRepository.ListarTodos();
        }

        [HttpPost(Name = "AdicionarLembrete")]
        public Lembrete Adicionar([FromBody] RegisterLembreteDTO lembrete)
        {
            Lembrete lembrete1 = new Lembrete(lembrete.Name, DateOnly.Parse(lembrete.Date));
            return lembreteRepository.Adicionar(lembrete1);
        }

        [HttpDelete("{id}", Name = "DeletarLembrete")]
        public bool Delete(long id)
        {
            return lembreteRepository.Deletar(id);
        }
    }
}

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
        private readonly DataContext data = new DataContext();

        public LembreteController(ILogger<LembreteController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "ListarTodos")]
        public IEnumerable<Lembrete> ListarTodos()
        {
            return data.Lembretes.ToList();
        }

        [HttpPost(Name = "AdicionarLembrete")]
        public Lembrete Adicionar([FromBody] RegisterLembreteDTO lembrete)
        {
            Lembrete lembrete1 = new Lembrete(lembrete.Name, DateOnly.Parse(lembrete.Date));
            data.Add(lembrete1);
            data.SaveChanges();
            return lembrete1;
        }

        [HttpDelete("{id}", Name = "DeletarLembrete")]
        public Lembrete Delete(long id)
        {
            Lembrete? lembrete = data.Lembretes.Find(id);
            if (lembrete != null)
            {
                data.Lembretes.Remove(lembrete);
                data.SaveChanges();
            }
            return lembrete;
        }
    }
}

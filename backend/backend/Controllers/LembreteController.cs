using Microsoft.AspNetCore.Mvc;
using backend.Entity;
using backend.Controllers.DTOs;
using backend.Data;
using backend.Services;
namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LembreteController : ControllerBase
    {
        public ILembreteService LembreteService { get; }

        public LembreteController(ILembreteService lembreteService)
        {
            LembreteService = lembreteService;
        }

        [HttpGet(Name = "ListarTodos")]
        public IEnumerable<Lembrete> ListarTodos()
        {
            return LembreteService.ListarTodosLembretes();
        }

        [HttpPost(Name = "AdicionarLembrete")]
        public Lembrete Adicionar([FromBody] RegisterLembreteDTO lembrete)
        {
            Lembrete lembrete1 = new Lembrete(lembrete.Name, DateOnly.Parse(lembrete.Date));
            return LembreteService.AdicionarLembrete(lembrete1);
        }

        [HttpDelete("{id}", Name = "DeletarLembrete")]
        public bool Delete(long id)
        {
            return LembreteService.DeletarLembrete(id);
        }
    }
}

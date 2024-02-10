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

        [HttpGet(Name = "GetAllLembretes")]
        public IEnumerable<Lembrete> GetAll()
        {
            return data.Lembretes.ToList();
        }

        [HttpPost(Name = "RegisterLembrete")]
        public Lembrete Register([FromBody] RegisterLembreteDTO lembrete)
        {
            Lembrete lembrete1 = new Lembrete(lembrete.Name, DateOnly.Parse(lembrete.Date));
            data.Add(lembrete1);
            data.SaveChanges();
            return lembrete1;
        }

        [HttpDelete("{id}")]
        public Lembrete Delete(long id)
        {
            return new Lembrete(id, "Vitão", DateOnly.Parse("2024-03-01"));
        }
    }
}

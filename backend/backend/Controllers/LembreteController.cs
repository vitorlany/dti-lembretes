using Microsoft.AspNetCore.Mvc;
using backend.DTO;
using backend.Entity;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LembreteController : ControllerBase
    {

        private readonly ILogger<LembreteController> _logger;

        public LembreteController(ILogger<LembreteController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetAllLembretes")]
        public IEnumerable<Lembrete> GetAll()
        {
            return Enumerable.Range(1, 5)
                .Select(index =>
                    new Lembrete("Vit�o", DateOnly.Parse("2024-03-01")
                 )
             ).ToArray();
        }

        [HttpPost(Name = "RegisterLembrete")]
        public Lembrete Register([FromBody] RegisterLembreteDTO lembrete)
        {
            return new Lembrete(lembrete.Name, DateOnly.Parse(lembrete.Date));
        }
    }
}
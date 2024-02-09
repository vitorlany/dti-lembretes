using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LembreteController : ControllerBase
    {

        private readonly ILogger<LembreteController> _logger;

        public LembreteController(ILogger<LembreteController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetLembrete")]
        public IEnumerable<Lembrete> Get()
        {
            return Enumerable.Range(1, 5)
                .Select(index =>
                    new Lembrete("Vitão", DateOnly.Parse("2024-03-01")
                 )
             ).ToArray();
        }
    }
}

using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace backend.Entity.Tests
{
    [TestClass()]
    public class LembreteTests
    {
        [TestMethod]
        public void Lembrete_CriarComNomeVazio()
        {
            string name = "";
            DateOnly date = DateOnly.FromDateTime(DateTime.Now.AddDays(1));

            Assert.ThrowsException<ArgumentException>(() => new Lembrete(name, date));
        }

        [TestMethod]
        public void Lembrete_CriarComDataPassada()
        {
            string name = "Teste";
            DateOnly date = DateOnly.FromDateTime(DateTime.Now.AddDays(-1));

            Assert.ThrowsException<ArgumentException>(() => new Lembrete(name, date));
        }

        [TestMethod]
        public void Lembrete_CriarComDadosValidos_CriaLembrete()
        {
            string name = "Teste";
            DateOnly date = DateOnly.FromDateTime(DateTime.Now.AddDays(1));

            var lembrete = new Lembrete(name, date);

            Assert.AreEqual(name, lembrete.Name);
            Assert.AreEqual(date, lembrete.Date);
        }
    }
}
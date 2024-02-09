using System.Xml.Linq;

namespace backend
{
    public class Lembrete
    {
        public string name { get; private set; }
        public DateOnly date { get; private set; }

        public Lembrete(string name, DateOnly date)
        {
            setName(name);
            setDate(date);
        }

        private void setName(string value)
        {
            if(value == "" || value == null)
                throw new ArgumentException("O nome deve ser preenchido");
            name = value;
        }

        private void setDate(DateOnly value)
        {
            if (value < DateOnly.FromDateTime(DateTime.Now))
                throw new ArgumentException("A data deve ser superior ao momento atual");
            date = value;
        }

    }
}

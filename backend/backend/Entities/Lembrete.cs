namespace backend.Entity;

public class Lembrete
{
    public long Id { get; private set; }
    public string Name { get; private set; }
    public DateOnly Date { get; private set; }

    public Lembrete(string name, DateOnly date)
    {
        Id = 0;
        setName(name);
        setDate(date);
    }

    public Lembrete(long id, string name, DateOnly date)
    {
        Id = id;
        setName(name);
        setDate(date);
    }

    private void setName(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException("O nome deve ser preenchido");
        Name = value;
    }

    private void setDate(DateOnly value)
    {
        if (value < DateOnly.FromDateTime(DateTime.Now))
            throw new ArgumentException("A data deve ser superior ao momento atual");
        Date = value;
    }

}

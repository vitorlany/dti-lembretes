using backend.Data;
using backend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

// Add services to the container.
services.AddCors(options =>
{
    options.AddDefaultPolicy(
                          policy =>
                          {
                              policy.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
                          });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

services.AddDbContext<DataContext>(options =>
       options.UseSqlite(@"Data Source=database.db"));

services.AddScoped<ILembreteRepository, LembreteRepository>();
services.AddScoped<ILembreteService, LembreteService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors();

app.Run();

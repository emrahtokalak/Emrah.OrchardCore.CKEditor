using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using OrchardCore.Admin;
using OrchardCore.Logging;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

builder.Services
    .AddOrchardCms()
    .AddMvc();

var logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
    .CreateLogger();

builder.Host.UseSerilog(logger);

var app = builder.Build();

builder.WebHost.UseUrls("http://localhost:5001");

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseSerilogRequestLogging();

app.UseStaticFiles();

app.Run();


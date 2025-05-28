using Microsoft.EntityFrameworkCore;
using AG_Api.Models;

namespace AG_Api.Data{

public class ApplicationDbContext : DbContext {

    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
    public DbSet<Car> Cars { get; set; }

}        
}

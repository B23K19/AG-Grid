using AG_Api.Data;
using Microsoft.EntityFrameworkCore;
using AG_Api.Models;
using Microsoft.AspNetCore.Mvc;

namespace AG_Api.Controller{

    [Route("api/[controller]")]
    [ApiController]
    public class CarsController : ControllerBase {
        private readonly ApplicationDbContext _context;

        public CarsController(ApplicationDbContext context)
        {
            _context = context;
        }

    [HttpGet]
    public async Task<IActionResult> GetCars(int page=1 , int limit=10 , string?search = "") {
        
            var query = _context.Cars.AsQueryable();
            if (!string.IsNullOrEmpty(search)) 
            {
                query = query.Where(c => c.Make.ToLower().Contains(search.ToLower()) || c.Model.Contains(search) || c.Price.ToString().Contains(search));
            }

        var totalItems = await query.CountAsync();
        var totalPages = (int)Math.Ceiling((double)totalItems / limit);
        var data = await query
            .OrderBy(c => c.Id) 
            .Skip((page - 1) * limit)
            .Take(limit)
            .ToListAsync();
        return Ok(new{
            data,
            pagination = new
            {
                currentPage = page,
                totalItems,
                totalPages
            }
        });
    }

}
}
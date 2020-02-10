using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskApp.API.Data;
using TaskApp.API.Dtos;
using TaskApp.API.Models;
using AutoMapper;
using System.Collections.Generic;

namespace TaskApp.API.Controllers {

    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase {
        private readonly ITaskRepository _repo;
        private readonly IMapper _mapper;
        public EmployeesController(ITaskRepository repo, IMapper mapper) {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetEmployees() {
            var employees = await _repo.GetEmployees();

            var employeeToReturn = _mapper.Map<IEnumerable<EmployeeForListDto>>(employees);
            return Ok(employeeToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmployee(int id) {
            var employee = await _repo.GetEmployee(id);

            var employeeToReturn = _mapper.Map<EmployeeForDetailedDto>(employee);
            return Ok(employeeToReturn);
        }
    }

}
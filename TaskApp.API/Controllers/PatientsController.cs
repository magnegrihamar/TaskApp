using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskApp.API.Data;
using TaskApp.API.Models;
using TaskApp.API.Dtos;
using AutoMapper;
using System.Collections.Generic;

namespace TaskApp.API.Controllers {
    
    [ApiController]
    [Route("api/[controller]")]
    public class PatientsController : ControllerBase {
        private readonly ITaskRepository _repo;
        private readonly IMapper _mapper;
        public PatientsController(ITaskRepository repo, IMapper mapper) {
            _mapper = mapper;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetPatients() {
            var patients = await _repo.GetPatients();

            var patientToReturn = _mapper.Map<IEnumerable<PatientForListDto>>(patients);
            return Ok(patientToReturn);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPatient(int id) {
            var patient = await _repo.GetPatient(id);

            var patientToReturn = _mapper.Map<PatientForListDto>(patient);
            return Ok(patientToReturn);
        }
    }
}
using AutoMapper;
using TaskApp.API.Dtos;
using TaskApp.API.Models;

namespace TaskApp.API.Helpers
{
    public class AutoMapperEmployees : Profile
    {
        public AutoMapperEmployees()
        {
            CreateMap<Employee, EmployeeForListDto>()
               .ForMember(dest => dest.numPatients, opt => opt.MapFrom(src => src.Patients.Count));
            CreateMap<Employee, EmployeeForDetailedDto>();

        }
    }
}
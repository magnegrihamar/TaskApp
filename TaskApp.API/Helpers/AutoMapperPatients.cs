using AutoMapper;
using TaskApp.API.Dtos;
using TaskApp.API.Models;

namespace TaskApp.API.Helpers
{
    public class AutoMapperPatients : Profile
    {
        public AutoMapperPatients()
        {
            CreateMap<Patient, PatientForListDto>()
               .ForMember(dest => dest.Age, opt => 
               opt.MapFrom(src => src.DateOfBirth.CalculatePasientAge() ) );
            //CreateMap<Patient, PatientForDetailedListDto>();

        }
    }
}
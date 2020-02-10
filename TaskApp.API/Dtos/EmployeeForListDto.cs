using System;

namespace TaskApp.API.Dtos
{
    public class EmployeeForListDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int numPatients { get; set; }
        public string PhotoUrl { get; set; }
    }
}
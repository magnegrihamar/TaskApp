using System;

namespace TaskApp.API.Models
{
    public class PatientForListDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string PhotoUrl { get; set; }
        public int EmployeeID { get; set; }
        
    }
}
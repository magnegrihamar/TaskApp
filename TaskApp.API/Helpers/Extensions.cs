using System;

namespace TaskApp.API.Helpers
{
    public static class Extensions
    {
        public static int CalculatePasientAge(this DateTime theDateTime )
        {
            var age = DateTime.Today.Year - theDateTime.Year;
            
            if ( theDateTime.AddYears(age) > DateTime.Today )
                age--;
            
            return age;
        }

        public static int EmployeeLastActive(this DateTime theDateTime )
        {
            var lastActive = DateTime.Today.Hour - theDateTime.Day;
            
            //if ( theDateTime.AddDays( lastActive) > DateTime.Today )
              //  lastActive--;
            
            return lastActive;
        }
    }
}
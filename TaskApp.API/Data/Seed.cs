using System.Collections.Generic;
using System.Linq;
using TaskApp.API.Models;
using System.Threading.Tasks;
using System;
using Newtonsoft.Json;


namespace TaskApp.API.Data
{
    public class Seed {

        public static Task SeedData(DataContext context)
        {
            /* Implement method to fetch data from https://weisstech.no/api/data.json */
            throw new NotImplementedException();
            /*
            if (!context.Employees.Any() )
            {
                var data = System.IO.File.ReadAllText("Data/EmployeeSeedData.json");
                var employees = JsonConvert.DeserializeObject<List<Employee>>(data);
                foreach( Employee employee in employees )
                {
                    employee.Username = employee.Username.ToLower();
                    context.Employees.Add(employee);
                } 
                context.SaveChanges();  

            } 
            return context.;

            */    
        }
        //var patients = await this.context.Patients.ToListAsync();
          //  return patients;
            
    }
}

            
/*

            if (!context.Employees.Any() )
            {
                var data = System.IO.File.ReadAllText("Data/EmployeeSeedData.json");
                var employees = JsonConvert.DeserializeObject<List<Employee>>(data);
                 

                //foreach( var employee in employees )
                //{

                //} 


              //  var employeeData = System.IO.File.ReadAllText("Data/EmployeeSeedData.json");
              //  List<Employee> list = JsonConvert.DeserializeObject<List<Employee>>(employeeData);
               // var employees = list;

               // foreach(Employee employee in employees )
               // {

               // }     
            }   
        

            //if (!context.Employees.Any())
           // {
                
                

                

                //foreach ( Employee employee in employees )
                //{
                  //  employee.Username = employee.Username.ToLower();
                    //context.Employees.Add(employee);
                   
                //}   

               // context.SaveChanges();
         //   }
            
            
            //return ;

        //}

       */ 

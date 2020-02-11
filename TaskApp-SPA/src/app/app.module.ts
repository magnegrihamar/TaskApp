import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
//import { TimeAgoPipe } from 'time-ago-pipe';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { PatientListComponent } from './employees/patient-list/patient-list.component';
import { appRoutes } from './routes';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
import { EmployeeDetailComponent } from './employees/employee-detail/employee-detail.component';
import { PatientCardComponent } from './employees/patient-card/patient-card.component';

@NgModule({
   declarations: [
      AppComponent,
      EmployeeComponent,
      NavComponent,
      EmployeeListComponent,
      PatientListComponent,
      PatientCardComponent,
      EmployeeCardComponent,
      EmployeeDetailComponent,
   //   TimeAgoPipe
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

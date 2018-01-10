import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list.component';
import { DepartmentListComponent } from './department-list.component';





@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot ([
      {path: 'departments', component: DepartmentListComponent},
      {path: 'employees', component: EmployeeListComponent}
    ])
  ],
  declarations: [AppComponent, DepartmentListComponent, EmployeeListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

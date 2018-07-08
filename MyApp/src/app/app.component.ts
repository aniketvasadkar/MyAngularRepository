import { Component } from '@angular/core';
import {employeeService} from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular 6 App';
  id:string;
  empObj = {};
  constructor(public empService:employeeService){

  }

  public getEmployee(){
    this.empObj = this.empService.findEmployee(this.id);
  }
}

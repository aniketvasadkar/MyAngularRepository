import { Component } from '@angular/core';
import { employeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.css']
})
export class ServiceDemoComponent  {
  title = 'My Angular 6 App';
  id:string;
  empObj = {};
  constructor(public empService:employeeService){

  }

  public getEmployee(){
    this.empObj = this.empService.findEmployee(this.id);
  }

}

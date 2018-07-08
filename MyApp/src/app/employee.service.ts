import { Injectable } from '@angular/core';

@Injectable()

export class employeeService {
 employeeRecords = [
{id:'e1', name:'employee_name_1',age:20},
{id:'e2', name:'employee_name_2',age:21},
{id:'e3', name:'employee_name_3',age:22},
{id:'e4', name:'employee_name_4',age:23},
{id:'e5', name:'employee_name_5',age:24},
{id:'e6', name:'employee_name_6',age:25}
];

employeeObj ={};

findEmployee(id:string):any{

for(let i=0;i<this.employeeRecords.length;i++){
    if(this.employeeRecords[i].id === id){
        this.employeeObj = this.employeeRecords[i];
        break;
    }

}

return this.employeeObj;

}

}
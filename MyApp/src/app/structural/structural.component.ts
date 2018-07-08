import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }

  heading:string="Structural Directive Demo !!!!"
  repCount:number=0;
  cities  = [         {name :"Mumbai"},
                        {name :"Delhi"},
                        {name :"Chennai"},
                        {name :"Kolkata"},
                        {name :"Pune"}
                      ];
        
 isVisible : boolean = false;
 value : number = 1;
 
 check() {
 this.isVisible = !this.isVisible;    
 }

 increament(){
  this.value++;

 }  
 repeatData(){
  this.repCount++;
}

addCity(newCityName:string){
this.cities.push({name:newCityName});
}
}

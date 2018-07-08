import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstName: string = "Aniket";
  lastName:string = "Vasadkar";
  salary:number = 50000



}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-android-ide',
  templateUrl: './android-ide.component.html',
  styleUrls: ['./android-ide.component.css']
})
export class AndroidIdeComponent implements OnInit {

public ideValue;
private observerRef:any; 

  constructor(private activatedRoute:ActivatedRoute) {

    
   }

  ngOnInit() {
    this.observerRef = this.activatedRoute.params.subscribe(params=>{
      this.ideValue = params['ideSelected'];
      
      
  })
    
  }
  ngOnDestroy(){

    this.observerRef.unsubscribe();
  }

}

import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]'
})
export class RepeatDirective {

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer : ViewContainerRef) { }

  @Input() set appRepeat(count:number){

    for(let i = 0 ; i<count;i++){

      this._viewContainer.createEmbeddedView(this._templateRef);

    }

  }

  
}

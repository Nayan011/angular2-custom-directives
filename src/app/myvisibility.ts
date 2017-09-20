import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[visibility]'
})
export class visibilityDirective {
  
  constructor(private e: ElementRef, private r: Renderer) { 
       //e.nativeElement.style.color = 'green';
      r.setElementStyle(e.nativeElement, 'font-size', '22px');

      this.isVisible=false;
  }

  
isVisible:boolean;
  // To Listen to Events that are triggered by client
  @HostListener('dblclick') foo(isVisible){ 
  if(isVisible){
  console.log(isVisible);

 this.e.nativeElement.style.display="block";
 //this.isVisible=false;
   }

   else 
   {
    this.e.nativeElement.style.display="none";
    //this.isVisible=true;
   }

  
  }
  

  ngOnInit(){ // reached after all bound properties are initilized
    //this.myShadow = this.defaultShadow;

  }



  
}

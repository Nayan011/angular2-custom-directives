import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[upper1]'
})
export class upperDirective {

  constructor(private e: ElementRef, private r: Renderer) { 
      // e.nativeElement.style.fontSize = '22px'
      r.setElementStyle(e.nativeElement, 'font-size', '22px')
  }

  

  // To Listen to Events that are triggered by client
  @HostListener('mouseenter') foo(){ 
   
  this.e.nativeElement.innerHTML= this.e.nativeElement.innerHTML.toUpperCase(); ;
  
  }
  

  ngOnInit(){ // reached after all bound properties are initilized
    //this.myShadow = this.defaultShadow;

  }



  
}

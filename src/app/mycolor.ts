import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[mycolor]'
})
export class mycolorDirective {
colors:string[]=["red","green","yellow"];

constructor(private e: ElementRef, private r: Renderer) { 
      // e.nativeElement.style.fontSize = '22px'
      //r.setElementStyle(e.nativeElement, 'font-size', '22px');
this.colors=["green","yellow","black"];
  }
 
 findColor(array:string[]):string {
  return array[Math.floor(Math.random() * array.length)];
}
 color:string= this.findColor(this.colors);


  
  
 
  // To Listen to Events that are triggered by client
  @HostListener('mouseenter') foo(){ 
   this.e.nativeElement.style.color = this.color;
  //this.e.nativeElement.innerHTML= this.e.nativeElement.innerHTML.toUpperCase(); 
  
  }
  

  ngOnInit(){ // reached after all bound properties are initilized
    //this.myShadow = this.defaultShadow;
    

  }



  
}

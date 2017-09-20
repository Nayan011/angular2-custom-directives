import { Component,Output,OnInit,EventEmitter,HostBinding,HostListener,ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'child-app',
  template: `
   <div>
   <p>mouseenter to show uppercase and click to hide or show</p>
    <ul  visibility>
      <li clas="cl" *ngFor="let name of names" upper1 mycolor >{{name}}</li><br>
    </ul>
   </div>
  `,
  styleUrls: ['./app.component.css']
})
export class childComponent implements OnInit {
constructor(private e: ElementRef,
              private r: Renderer) {
              this.names=["Nayan","Nuruzzaman","Bepari"];
   
  }
@Output() colorChange=new EventEmitter<string>(); 

 value:string="green";
@HostListener("mouseover") onMouseOver(){
   this.value = this.e.nativeElement.style.color;
  
}


names:string[];
  

  ngOnInit(): void {
    this.value=this.value;
    this.colorChange.emit(this.value);
    
  }
}

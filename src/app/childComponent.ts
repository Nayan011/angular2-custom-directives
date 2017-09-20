import { Component,Output,OnInit,EventEmitter} from '@angular/core';

@Component({
  selector: 'child-app',
  template: `
   <div>
   
   <p>mouseenter to show uppercase, double click to hide or show and click just to send color to parent</p>
    <ul  >
      <li class="cl" *ngFor="let name of names" upper1 mycolor visibility (click)="getColor(myli)" #myli >{{name}}</li><br>
    </ul>
   </div>
  `,
  styleUrls: ['./app.component.css']
})
export class childComponent implements OnInit {
value:string="";

constructor() {
              this.names=["Nayan","Nuruzzaman","Bepari"];
   
  }
getColor(el):void{
   this.value =el.style.color; 
   this.colorChange.emit(this.value);
 }

@Output() colorChange=new EventEmitter<string>(); 

 


names:string[];
  

  ngOnInit(): void {
    this.value=this.value;
    this.colorChange.emit(this.value);
    
  }
}

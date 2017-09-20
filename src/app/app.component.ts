import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h3>Changed color from child component is {{value}}<h3>
   <child-app (colorChange)="getValue($event)"><child-app>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
value:string="";
getValue(value){
	this.value=value;
};

}

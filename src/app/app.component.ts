import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
}
export class Goal {
  showDescription: boolean;
  constructor(public id: number,public name: string,public description: string){
    this.showDescription=false;
  }
}
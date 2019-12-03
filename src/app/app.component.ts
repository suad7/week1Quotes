import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  = 'quotes';
  
  todayDate=new Date
  quotes:Quote[]=[];
  addAquote(quotes){
    const quoteDetail = this.quotes.length;
    quotes.id = quoteDetail+1;
    this.quotes.push(quotes);

  }
}
 

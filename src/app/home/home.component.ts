import { Component, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() addedQuote = new EventEmitter<Quote>();
  quotes:Quote[];
  newQuote = new Quote(1,'','','');
  submitQuote(){
    this.addedQuote.emit(this.newQuote);
  }
}

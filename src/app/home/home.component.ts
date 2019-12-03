import { Component, Output, EventEmitter,} from "@angular/core";
import { Quote } from "../quote";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  @Output() addedQuote = new EventEmitter<Quote>();
  quotes: Quote[];
  newQuote = new Quote(1, "", "", "", new Date());
  submitQuote() {
    this.addedQuote.emit(this.newQuote);
    this.newQuote = new Quote(1, "", "", "", new Date());
  }
  numOfLikes = 0;
  numOfDislikes = 0;

  upVotes(){
    this.numOfLikes++;
  }
  dislikes(){
    this.numOfDislikes++;
  }

}

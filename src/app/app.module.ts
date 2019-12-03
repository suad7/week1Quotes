import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HomePipe } from "./home.pipe";
import {TimeAgoPipe} from 'time-ago-pipe';
import { LikesComponent } from './likes/likes.component';
@NgModule({
  declarations: [AppComponent, HomeComponent,HomePipe,TimeAgoPipe, LikesComponent ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}


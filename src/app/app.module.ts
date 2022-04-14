import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormComponent } from './form/form.component';
import { UpvotePipe } from './upvote.pipe';
import { DownvotePipe } from './downvote.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    FormComponent,
    UpvotePipe,
    DownvotePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

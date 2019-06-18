import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// import { HttpService } from './http.service';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  // providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

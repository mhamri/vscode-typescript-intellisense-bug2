import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { SampleModule } from "@myApp/lib1-name";
import { AppComponent } from './app.component';





@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SampleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Sample1Component } from './sample1/sample1.component';

@NgModule({
  declarations: [AppComponent, Sample1Component],
  imports: [BrowserModule, AppRoutingModule, MatExpansionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

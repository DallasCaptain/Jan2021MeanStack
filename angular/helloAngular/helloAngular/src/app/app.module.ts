import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { KittenComponent } from './kitten/kitten.component'

import { FormsModule } from '@angular/forms';
import { ShowcatComponent } from './showcat/showcat.component';
import { EditcatComponent } from './editcat/editcat.component'

@NgModule({
  declarations: [
    AppComponent,
    KittenComponent,
    ShowcatComponent,
    EditcatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdToolbarModule } from '@angular2-material/toolbar/toolbar';
import { MdButtonModule } from '@angular2-material/button/button';
import { MdCardModule } from '@angular2-material/card/card';
import { AppComponent }   from './app.component';
import { GameTimeComponent } from './game-time.component';
@NgModule({
  imports:      [ 
    BrowserModule,
    MdToolbarModule.forRoot(),
    MdButtonModule.forRoot(),
    MdCardModule.forRoot()
  ],
  declarations: [ AppComponent, GameTimeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicienneComponent } from './musicienne/musicienne.component';
import { AddMusicienneComponent } from './add-musicienne/add-musicienne.component';
import { FormsModule } from '@angular/forms';
import { UpdateMusicienneComponent } from './update-musicienne/update-musicienne.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicienneComponent,
    AddMusicienneComponent,
    UpdateMusicienneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

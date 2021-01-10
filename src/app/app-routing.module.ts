import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MusicienneComponent} from './musicienne/musicienne.component'
import { AddMusicienneComponent } from './add-musicienne/add-musicienne.component';
import { UpdateMusicienneComponent } from './update-musicienne/update-musicienne.component';
const routes: Routes = [
  {path: "updateProduit/:id", component: UpdateMusicienneComponent},

  {path: "musicienne", component :MusicienneComponent},
  {path: "add-musicienne", component : AddMusicienneComponent},
  { path: "", redirectTo: "musicienne", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { musicienne } from '../model/musicienne';
import { MusicienneService } from '../services/musicienne.service';


@Component({
  selector: 'app-add-musicienne',
  templateUrl: './add-musicienne.component.html'
})
export class AddMusicienneComponent implements OnInit {


  newMusicienne = new musicienne();
  constructor(private MusicienneService: MusicienneService){ }

  addMusicienne(){
    this.MusicienneService.ajouterMusicienne(this.newMusicienne);
   
    }
    


  

  ngOnInit() {
  }

}
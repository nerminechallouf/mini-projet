import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MusicienneService } from '../services/musicienne.service';
import { musicienne } from '../model/musicienne';

@Component({
  selector: 'app-update-musicienne',
  templateUrl: './update-musicienne.component.html',
  styles: []
})
export class UpdateMusicienneComponent implements OnInit {
  currentMusicienne = new musicienne();
  constructor(private activatedRoute: ActivatedRoute,private router :Router,
    private musicienneService: MusicienneService) { }
   
    updateProduit()
    { //console.log(this.currentProduit);
    this.musicienneService.updateMusicienne(this.currentMusicienne);
    this.router.navigate(['musiciennes']);
}
    
    ngOnInit() {
      // console.log(this.route.snapshot.params.id);
      this.currentMusicienne = this.musicienneService.consulterMusic(this.activatedRoute.snapshot.params.id);
      console.log(this.currentMusicienne);
      } 
    
  }
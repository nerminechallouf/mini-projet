import { Component, OnInit } from '@angular/core';
import { musicienne } from '../model/musicienne';
import { MusicienneService } from '../services/musicienne.service';

export class MusicienneComponent implements OnInit {
  musiciennes : musicienne[]; 

  constructor(private musicienneService: MusicienneService) {
    this.musiciennes = musicienneService.listeMusiciennes();
  }

          
  

  ngOnInit() {
  }
 

}

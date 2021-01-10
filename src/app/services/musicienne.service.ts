import { Injectable } from '@angular/core';
import { musicienne } from '../model/musicienne';
@Injectable({
providedIn: 'root'
})
export class MusicienneService {
  musiciennes : musicienne[]; 
  Musicienne : musicienne;

  constructor() { 
    this.musiciennes = [
     
      {id : 1, nomMusicienne : "Yi-Xu", lieu : "Chine", dateDebut : new Date("01/08/1967")},
      {id : 2, nomMusicienne : "Sophie Lacaze", lieu :"France" , dateDebut : new Date("05/10/1963")},
      {id : 3, nomMusicienne : "Sofia Gubaidulina",lieu :"Russia" , dateDebut : new Date("01/1931")}
      
     
       ];}
    
       listeMusiciennes():musicienne[] {

        return this.musiciennes;
        }
        ajouterMusicienne( music: musicienne){
        this.musiciennes.push(music);
        }
        supprimerMusicienne( music : musicienne){
          //supprimer le produit prod du tableau produits
          const index = this.musiciennes.indexOf(music, 0);
          if (index > -1) {
          this.musiciennes.splice(index, 1);
          }}
          //ou Bien
          /* this.produits.forEach((cur, index) => {
          if(prod.idProduit === cur.idProduit) {
          this.produits.splice(index, 1);
          }
          }); */
          consulterMusic(idd:number): musicienne{
            this.Musicienne = this.musiciennes.find(m => m.id == idd);
            return this.Musicienne;
            }

trierMusicienne(){
  this.musiciennes = this.musiciennes.sort((n1,n2) => {
  if (n1.id > n2.id) {
  return 1;
  }
  if (n1.id < n2.id) {
  return -1;
  }
  return 0;
  });
  }
  updateMusicienne(m:musicienne)
  {
  // console.log(p);
  this.supprimerMusicienne(m);
  this.ajouterMusicienne(m);
  this.trierMusicienne();
  }
  
            
            
   
          
        }
        
        

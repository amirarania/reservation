import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Louage } from '../classes/louage';
import { Trajet } from '../classes/trajet';
import { chauffeursService } from '../services/chauffeurs.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  louages: Louage[];
  chauffeur:any;
  trajets:Trajet[];
  louage:Louage;
  trajet:Trajet;

  constructor(private chauffeursService:chauffeursService,private afs:AngularFirestore) { }

  ngOnInit(): void {
    this.chauffeur=JSON.parse(localStorage.getItem('chauffeur'));
    console.log(this.chauffeur);
    //this.chauffeursService.getlouage(this.chauffeur.uid);
    //this.chauffeursService.gettrajet(this.chauffeur.uid);
    this.getlouage(this.chauffeur.id);
    this.gettrajet(this.chauffeur.id);

  }
  async getlouage(docId:string){
  
    this.chauffeursService.getlouage().subscribe(admin => {
      this.louages= admin.map(item => {
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as Louage;
      });  
      console.log(this.louages);           
    
       this.louages = this.louages.filter(s => {
        return s.uid== docId;
      })
      this.louage=this.louages[0];

      console.log(this.louage);           
    }); 
  }
  async gettrajet(docId:string){
  
    this.chauffeursService.gettrajet().subscribe(admin => {
      this.trajets= admin.map(item => {
        let uid = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { uid, ...(data as {}) } as Trajet;
      });      
       this.trajets = this.trajets.filter(s => {
        return s.uid== docId;
      })
      this.trajet=this.trajets[0];
      console.log(this.trajet);           
    }); 
  }
}

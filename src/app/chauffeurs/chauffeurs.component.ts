import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../classes/personne';

import { chauffeursService } from '../services/chauffeurs.service';


@Component({
  selector: 'app-chauffeurs',
  templateUrl: './chauffeurs.component.html',
  styleUrls: ['./chauffeurs.component.css']
})
export class ChauffeursComponent implements OnInit {
  
 
  chauffeurs : Personne[]
  chauffeursService: any;
  
  constructor(private cfservice: chauffeursService,private router:Router) { }

  ngOnInit(): void {
    this.getchauffeur();

  }

  getchauffeur(){
    this.cfservice.getchauffeurs().subscribe(chauffeur => {
      this.chauffeurs = chauffeur.map(item => {
        let id = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { id, ...(data as {} ) } as Personne;
      }); 
      console.log(this.chauffeurs);
    });
  }

  bloquer(id)
  { 
    let record = {}
    record['etat']="bloquer";
    this.cfservice.Bloquerchauffer(record,id);
  }
  debloquer(id)
  { 
    let record = {}
    record['etat']="debloquer";
    this.cfservice.Bloquerchauffer(record,id);
  }
  details(chauffeur)
  {
    localStorage.setItem('chauffeur',JSON.stringify(chauffeur));
    this.router.navigate(['/details']);
  }
} 


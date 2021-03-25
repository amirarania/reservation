import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from 'src/app/classes/compte';
import { Personne } from 'src/app/classes/personne';
import { chauffeursService } from 'src/app/services/chauffeurs.service';

@Component({
  selector: 'app-ajouter-chauffeur',
  templateUrl: './ajouter-chauffeur.component.html',
  styleUrls: ['./ajouter-chauffeur.component.css']
})
export class AjouterChauffeurComponent implements OnInit {

  personne: Personne = new Personne();
 compte: Compte = new Compte();
  submitted = false;

  constructor(private PersonneService: chauffeursService,private router:Router) { }

  ngOnInit(): void {
  }

  savePersonne(): void {
    console.log(this.personne.nom);
    let record={};
    record['nom']= this.personne.nom;
    record['prenom']= this.personne.prenom;
    record['email']= this.personne.email;
    record['tel']= this.personne.tel;
    record['civilite']= this.personne.civilite;
    record['grade']= 'chauffeur';
    this.PersonneService.ajouterchauffeurs(record).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
      this.router.navigate(['/Chauffeurs']);
    });
  }

  newPersonne(): void {
    this.submitted = false;
    this.personne = new Personne();
  }
}

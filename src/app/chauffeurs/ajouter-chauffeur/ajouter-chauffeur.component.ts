import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  chauffeurForm: FormGroup;

  constructor(private PersonneService: chauffeursService,private router:Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.chauffeurForm = this.fb.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      prenom: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['',[Validators.required, Validators.minLength(8),Validators.maxLength(8)]],
      civilite: ['', [Validators.required, Validators.minLength(1)]],
      grade: ['chauffeur' ],
    });
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
    console.log(record);
    this.PersonneService.ajouterchauffeurs(this.chauffeurForm.value).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
      this.router.navigate(['/chauffeurs']);
    });
  }

  newPersonne(): void {
    this.submitted = true;
    if (this.chauffeurForm.invalid) {
      return;
  }
    this.personne = new Personne();
  }

}

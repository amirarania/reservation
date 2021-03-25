import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compte } from '../classes/compte';
import { Personne } from '../classes/personne';
import { AuthService } from '../services/auth.service';
import { chauffeursService } from '../services/chauffeurs.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user: any;
  personne: Personne = new Personne();
 compte: Compte = new Compte();
  submitted = false;

  constructor(private authService: AuthService,private router:Router) { }

  

  savePersonne(): void {
    console.log(this.personne.nom);
    let record={};
    record['nom']= this.personne.nom;
    record['prenom']= this.personne.prenom;
    record['email']= this.user.email;
    record['tel']= this.personne.tel;
    record['civilite']= this.personne.civilite;
    record['grade']= 'admin';
    this.authService.modifierprofile(this.user.uid,record).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
      this.router.navigate(['/profil']);
    });
  }

  newPersonne(): void {
    this.submitted = false;
    this.personne = new Personne();
  }

  ngOnInit(): void {
    this.user =JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }


}

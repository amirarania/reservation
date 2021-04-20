import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeComponent } from './home/homeComponent';
import { ChauffeursComponent } from './chauffeurs/chauffeurs.component';
import { PassagersComponent} from './passagers/passagers.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { AjouterChauffeurComponent } from './chauffeurs/ajouter-chauffeur/ajouter-chauffeur.component';
import { ProfilComponent } from './profil/profil.component';
import { ReservationComponent } from './reservation/reservation.component';
import { makeBindingParser } from '@angular/compiler';

import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { MdpComponent } from './profil/mdp/mdp.component';
import { passwordComponent } from './password/password.component';
import { ModifierComponent } from './modifier/modifier.component';
import { DetailsComponent } from './details/details.component';



const routes: Routes = [
  {
    path: '', redirectTo: '/login' , pathMatch:'full'
  },
  {
    path:'',
    component:LayoutsComponent,
    children:[
      {path: 'home', component:homeComponent},
      {path: 'chauffeurs', component:ChauffeursComponent},
      {path: 'passagers', component:PassagersComponent},
      {path: 'ajouter-chauffeur', component:AjouterChauffeurComponent},
      {path:'profil',component:ProfilComponent},
      {path:'reservation',component:ReservationComponent},
      {path:'mdp',component:MdpComponent},
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'verify-email-address', component: VerifyEmailComponent },
      {path: 'modifier' , component: ModifierComponent},
      {path: 'details' , component:DetailsComponent}
  
    ]
  },
  {
    path:'login', component: LoginComponent
  },
  {path: 'password',component:passwordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

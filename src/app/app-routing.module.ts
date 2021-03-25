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
import { MajComponent } from './profil/maj/maj.component';
import { makeBindingParser } from '@angular/compiler';
import { MdpComponent } from './profil/mdp/mdp.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from "./shared/guard/auth.guard";



const routes: Routes = [
  {
    path: '', redirectTo: '/login' , pathMatch:'full'
  },
  {
    path:'',
    component:LayoutsComponent,
    children:[
      {path: '', component:homeComponent, canActivate:[AuthGuard]},
      {path: 'Home', component:homeComponent},
      {path: 'Chauffeurs', component:ChauffeursComponent},
      {path: 'Passagers', component:PassagersComponent},
      {path: 'ajouter-chauffeur', component:AjouterChauffeurComponent},
      {path:'profil',component:ProfilComponent},
      {path:'reservation',component:ReservationComponent},
      {path:'maj',component:MajComponent},
      {path:'mdp',component:MdpComponent},
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'verify-email-address', component: VerifyEmailComponent }

  
    ]
  },
  {
    path:'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

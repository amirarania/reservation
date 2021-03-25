import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutsComponent } from './layouts/layouts.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { ChauffeursComponent } from './chauffeurs/chauffeurs.component';

import { PassagersComponent } from './Passagers/Passagers.component';
import { LoginComponent } from './login/login.component';
import { homeComponent } from './home/homeComponent';
import { AjouterChauffeurComponent } from './chauffeurs/ajouter-chauffeur/ajouter-chauffeur.component';
import { ProfilComponent } from './profil/profil.component';
import { ReservationComponent } from './reservation/reservation.component';

import { MajComponent } from './profil/maj/maj.component';
import { MdpComponent } from './profil/mdp/mdp.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    SidebarComponent,
    homeComponent,
    ChauffeursComponent,
    PassagersComponent,
    LoginComponent,
    AjouterChauffeurComponent,
    ProfilComponent,
    ReservationComponent,
    
    MajComponent,
    MdpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }

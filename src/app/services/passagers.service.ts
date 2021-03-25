import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class passagersService {

  
  constructor(private firestore: AngularFirestore) {}

  getpassagers() {
    return this.firestore.collection("personne").snapshotChanges();
  }

  ajouterpassagers(record) {
    return this.firestore.collection('personne').add(record);
  }

  modifierpassagers(record) {
    return this.firestore.collection('personne').doc(record.id).update(record);
  }
}
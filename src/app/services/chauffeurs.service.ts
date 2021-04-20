import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class chauffeursService {

  
  constructor(private firestore: AngularFirestore) {}

  getchauffeurs() {
    return this.firestore.collection("personne").snapshotChanges();
  }
  getlouage() {
    return this.firestore.collection("louage").snapshotChanges();
  }
  gettrajet() {
    return this.firestore.collection("trajet").snapshotChanges();
  }
  ajouterchauffeurs(record) {
    return this.firestore.collection('personne').add(record);
  }

  modifierchauffeurs(record) {
    return this.firestore.collection('personne').doc(record.id).update(record);
  }

  Bloquerchauffer(record,id)
  {
  return this.firestore.collection('personne').doc(id).update(record);
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class reservationService {

  
  constructor(private firestore: AngularFirestore) {}

  getreservation() {
    return this.firestore.collection("reservation").snapshotChanges();
  }
}
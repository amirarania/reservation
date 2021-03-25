import { Component, OnInit } from '@angular/core';
import { Ticket } from '../classes/ticket';
import { reservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservations : Ticket [];
  constructor(private rsservice: reservationService) { }

  ngOnInit(): void {
    this.getreservation();
  }

  getreservation(){
    this.rsservice.getreservation().subscribe(reservation => {
      this.reservations = reservation.map(item => {
        let id = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { id, ...(data as {} ) } as Ticket;
      }); 
      console.log(this.reservations);
    });
  }
}

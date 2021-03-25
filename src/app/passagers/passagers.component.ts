import { Component, OnInit } from '@angular/core';
import { Personne } from '../classes/personne';
import { passagersService } from '../services/passagers.service';


@Component({
  selector: 'app-passagers',
  templateUrl: './passagers.component.html',
  styleUrls: ['./passagers.component.css']
})
export class PassagersComponent implements OnInit {
  passagers : Personne [];
  constructor(private passervice: passagersService) { }

  ngOnInit(): void {
    this.getpassager();
  }

  getpassager(){
    this.passervice.getpassagers().subscribe(passager => {
      this.passagers = passager.map(item => {
        let id = item.payload.doc.id;
        let data = item.payload.doc.data();
        return { id, ...(data as {} ) } as Personne;
      }); 
      console.log(this.passagers);
    });
  }
}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class homeComponent implements OnInit {
  user: any;
  userinfo: any;

  constructor() { }

  ngOnInit(): void {
    this.userinfo =JSON.parse(localStorage.getItem('currentuser'));
  }

  somme() {
  }
}

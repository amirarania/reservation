import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userinfo: any;

  constructor( public authService: AuthService) { }


  ngOnInit(): void {
    this.userinfo =JSON.parse(localStorage.getItem('currentuser'));

  }

}

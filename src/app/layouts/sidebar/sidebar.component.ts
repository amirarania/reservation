import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: any;
  userinfo: any;

  constructor() { }

  ngOnInit(): void {
    this.user =JSON.parse(localStorage.getItem('user'));
    this.userinfo =JSON.parse(localStorage.getItem('currentuser'));
    console.log(this.user);
  }

}

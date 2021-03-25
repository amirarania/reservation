import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-mdp',
  templateUrl: './mdp.component.html',
  styleUrls: ['./mdp.component.css']
})
export class MdpComponent implements OnInit {

  constructor(    public authService: AuthService
    ) { }

  ngOnInit(): void {
  }

}

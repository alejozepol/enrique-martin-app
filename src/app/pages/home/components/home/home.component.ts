import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  hasSession: boolean;
  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.hasSession().subscribe(session => {
      if (session) {
        this.hasSession = true;
      } else {
        this.hasSession = false;
      }
    });
  }
}

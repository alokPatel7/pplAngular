import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  logIn;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogout() {
    localStorage.removeItem('currentUserId');
    this.router.navigate(['/']);
  }

  ngDoCheck() {
    this.logIn = localStorage.getItem('currentUserId');
  }
}

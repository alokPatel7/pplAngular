import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../Service/data.service';
import { formatDate } from '@angular/common';
import { strict } from 'assert';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  model = {
    email: '',
    password: '',
  };

  invaliUserMessage: boolean = false;

  constructor(
    private titleService: Title,
    private dataServices: DataService,
    private router: Router
  ) {
    titleService.setTitle('Welcome to PPL');
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUserId')) {
      this.router.navigate(['/timeline']);
    }
  }

  handleLogin(formData) {
    if (formData.valid) {
      this.dataServices
        .handleLoginRequest(this.model)
        .subscribe((loginData: string) => {
          if (loginData) {
            localStorage.setItem('currentUserId', loginData);
            this.router.navigate(['/timeline']);
          } else {
            this.invaliUserMessage = true;
          }
          // console.log('return from server data ', loginData);
        });
    } else {
      // console.log('InValid form client side msg');
      alert('please fill valid id and password');
    }
  }
}

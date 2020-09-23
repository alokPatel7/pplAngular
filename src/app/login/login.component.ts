import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../Service/data.service';
import { formatDate } from '@angular/common';

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

  constructor(private titleService: Title, private dataServices: DataService) {
    titleService.setTitle('Welcome to PPL');
  }

  ngOnInit(): void {}

  handleLogin(formData) {
    if (formData.valid) {
      this.dataServices
        .handleLoginRequest(this.model)
        .subscribe((loginData: string) => {
          if (!loginData) {
            this.invaliUserMessage = true;
          } else {
            localStorage.setItem('currentUserId', loginData);
            this.model = { email: '', password: '' };
          }
          console.log('return from server data ', loginData);
        });
    } else {
      // console.log('InValid form client side msg');
      alert('please fill valid id and password');
    }
  }
}

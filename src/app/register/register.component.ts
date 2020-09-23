import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model = {
    userName: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  };

  invalidEmailMessage: boolean = false;
  invalidMessage: boolean = false;

  constructor(
    private titleService: Title,
    private registerService: DataService
  ) {
    titleService.setTitle('Registration | PPL');
  }
  ngOnInit(): void {}

  handleSubmit(formData) {
    if (formData.valid) {
      this.registerService
        .handleRegistration(this.model)
        .subscribe((validData) => {
          console.log('return data ', validData);
          if (!validData) {
            this.invalidEmailMessage = true;
          }
        });
    } else {
      console.log('Ivalid form data');
    }
  }
}

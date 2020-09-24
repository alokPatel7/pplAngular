import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  basicUrl = `http://localhost:2000`;

  constructor(private http: HttpClient) {}

  handleRegistration(formData) {
    return this.http.post(`${this.basicUrl}/signup`, { formData });
  }

  handleLoginRequest(formData) {
    const returnData = this.http.post(`${this.basicUrl}/login`, { formData });
    console.log('returenData', returnData);

    return returnData;
  }

  postImage(formData) {
    console.log('service file', formData);
    return this.http.post(`${this.basicUrl}/postUpload`, formData);
  }
}

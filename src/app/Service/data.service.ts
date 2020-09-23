import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  basicUrl = `http://localhost:2000`;

  formData;

  constructor(private http: HttpClient) {}

  handleRegistration(formData) {
    return this.http.post(`${this.basicUrl}/signup`, { formData });
  }

  handleLoginRequest(formData) {
    return this.http.post(`${this.basicUrl}/login`, { formData });
  }
}

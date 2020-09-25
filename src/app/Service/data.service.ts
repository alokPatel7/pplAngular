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

  curentUserdata(userId) {
    return this.http.post(`${this.basicUrl}/curentUserdata  `, { userId });
  }

  postImage(formData) {
    return this.http.post(`${this.basicUrl}/postUpload`, formData);
  }

  // PAI for retrive all post
  allPost(id) {
    return this.http.post(`${this.basicUrl}/timelinepost`, { id });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  basicUrl = `http://localhost:2000`;
  singlePostId;

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

  // API for retrive all post
  allPost() {
    return this.http.get(`${this.basicUrl}/timelinepost`);
  }

  //  API for current user post
  currentUserPost(userId) {
    return this.http.get(`${this.basicUrl}/currenUsrePost`, {
      params: { userId },
    });
  }

  // single post
  singlePost(postId) {
    return this.http.get(`${this.basicUrl}/singlepost`, { params: { postId } });
  }

  likePost(postid, userid) {
    return this.http.get(`${this.basicUrl}/likepost`, {
      params: { postid, userid },
    });
  }

  comment(postid, userName, comment) {
    return this.http.post(`${this.basicUrl}/submitcomment`, {
      params: { postid, userName, comment },
    });
  }
}

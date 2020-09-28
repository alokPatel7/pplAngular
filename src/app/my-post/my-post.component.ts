import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-my-post',
  templateUrl: './my-post.component.html',
  styleUrls: ['./my-post.component.css'],
})
export class MyPostComponent implements OnInit {
  currentUserId = localStorage.getItem('currentUserId');
  allPost;
  userName;
  constructor(
    private dataService: DataService,
    private router: Router,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    if (!this.currentUserId) {
      this.router.navigate(['/login']);
    }
    this.dataService
      .currentUserPost(this.currentUserId)
      .subscribe((postData) => {
        this.allPost = postData;
      });

    // current User Name
    this.dataService
      .curentUserdata(this.currentUserId)
      .subscribe((userData) => {
        this.userName = userData;
        this.titleService.setTitle(`${this.userName} | Post`);
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { DataService } from '../Service/data.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  userName;
  allPost;
  currentUseID = localStorage.getItem('currentUserId');

  constructor(
    private router: Router,
    private titleService: Title,
    private dataService: DataService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('currentUserId');
    if (!userId) {
      this.router.navigate(['/login']);
    } else {
      // current User Name
      this.dataService.curentUserdata(userId).subscribe((userData) => {
        this.userName = userData;
        this.titleService.setTitle(`${this.userName} | Timeline`);
      });
      this.timeLinePost();
    }
  }

  // timeline post
  timeLinePost() {
    // function for retrive the post
    this.dataService.allPost().subscribe((allpost) => {
      this.allPost = allpost;
    });
  }

  // single post
  singlePost(postId) {
    this.dataService.singlePostId = postId;
    console.log('postid', postId);
    this.router.navigate(['/singlepost']);
  }

  likePost(postid) {
    let currentUsreId = localStorage.getItem('currentUserId');
    this.dataService.likePost(postid, currentUsreId).subscribe((data) => {
      this.allPost = data;
    });
  }
}

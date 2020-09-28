import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css'],
})
export class SinglepostComponent implements OnInit {
  postId;
  currentUserId = localStorage.getItem('currentUserId');
  post;
  userName;
  Model = {
    comment: '',
  };
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.paramMap.get('postid');
    this.dataService.singlePost(this.postId).subscribe((data) => {
      this.post = data;
    });

    // current User Name
    this.dataService
      .curentUserdata(this.currentUserId)
      .subscribe((userData) => {
        this.userName = userData;
        this.titleService.setTitle(`${this.userName} | Post`);
      });
  }

  likePost(postid) {
    this.dataService.likePost(postid, this.currentUserId).subscribe((data) => {
      this.post = data;
    });
  }

  submitComment() {
    this.dataService
      .comment(this.postId, this.userName, this.Model.comment)
      .subscribe((data) => {
        this.post = data;
      });
    this.Model.comment = '';
  }
}

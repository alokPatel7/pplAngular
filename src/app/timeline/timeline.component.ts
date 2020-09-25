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

  constructor(
    private router: Router,
    private titleService: Title,
    private dataService: DataService,
    private datePipe: DatePipe,
  ) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('currentUserId');
    if (!userId) {
      this.router.navigate(['/login']);
    }
    // current User Name
    this.dataService.curentUserdata(userId).subscribe((userData) => {
      this.userName = userData;
      this.titleService.setTitle(`${this.userName} | Timeline`);
    });

    // function for retrive the current user post
    this.dataService.allPost(userId).subscribe((allpost) => {
      this.allPost = allpost;
      console.log(this.allPost);
    });
  }
}

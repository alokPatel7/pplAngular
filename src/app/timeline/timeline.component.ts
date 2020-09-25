import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  constructor(private router: Router, private titleService: Title) {
    titleService.setTitle('UserName | Timeline');
  }

  ngOnInit(): void {
    if (!localStorage.getItem('currentUserId')) {
      this.router.navigate(['/login']);
    }
  }
}

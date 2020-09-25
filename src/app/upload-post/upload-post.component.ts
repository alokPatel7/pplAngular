import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css'],
})
export class UploadPostComponent implements OnInit {
  popupboxStatus: boolean = false;
  uploadedFiles: any;
  categeory: string;
  userName: any;
  description;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    let userId = localStorage.getItem('currentUserId');
    this.dataService.curentUserdata(userId).subscribe((userData) => {
      this.userName = userData;
    });
  }

  handlePopupBox() {
    this.popupboxStatus = !this.popupboxStatus;
  }

  changeFile(event) {
    this.uploadedFiles = event.target.files[0];
    console.log('local var', this.uploadedFiles);
  }
  handleCategory(event) {
    const { name, value } = event.target;
    this.categeory = value;
  }

  handleDescription(event) {
    const { name, value } = event.target;
    this.description = value;
  }
  handlePostUpload(uploadForm) {
    let fd = new FormData();
    fd.append('userName', this.userName);
    fd.append('category', this.categeory);
    fd.append('myFile', this.uploadedFiles);
    fd.append('desc', this.description);
    fd.append('currentUserId', localStorage.getItem('currentUserId'));
    console.log('form Data file', this.uploadedFiles);
    this.dataService.postImage(fd).subscribe((res) => {
      console.log(res);
    });
    this.popupboxStatus = !this.popupboxStatus;
  }
}

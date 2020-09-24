import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css'],
})
export class UploadPostComponent implements OnInit {
  popupboxStatus: boolean = false;
  uploadedFiles: File = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  handlePopupBox() {
    this.popupboxStatus = !this.popupboxStatus;
  }

  changeFile(event) {
    console.log('event', event.target.files);

    this.uploadedFiles = event.target.files[0];
    console.log('local var', this.uploadedFiles);

    let fd = new FormData();
    console.log('changeFile', fd);
    fd.append('myFile', this.uploadedFiles, this.uploadedFiles.name);
    console.log('changeFile', fd);
    // this.dataService.postImage(this.uploadedFiles).subscribe((res) => {
    //   console.log(res);
    // });
  }

  // fileChange(element) {
  //   console.log('file change', element);
  //   this.uploadedFiles = element.target.files;
  // }

  //   handlePostUpload() {
  //     let formData = new FormData();
  //     for (var i = 0; i < this.uploadedFiles.length; i++) {
  //       formData.append(
  //         'uploads[]',
  //         this.uploadedFiles[i],
  //         this.uploadedFiles[i].name
  //       );
  //     }
  //     // this.http.post('/api/upload', formData).subscribe((response) => {
  //     //   console.log('response received is ', response);
  //     // });
  //
  //   }
  // }

  // handlePostUpload(files: File[]) {
  //   console.log('12121', files);
  //   var formData = new FormData();
  //   Array.from(files).forEach((f) => formData.append('file', f));

  //   // this.dataService.postImage(formData).subscribe((event) => {});
  //   // console.log('image upload', formData);
  // }
}

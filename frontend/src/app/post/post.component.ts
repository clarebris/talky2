import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FileUploader, FileItem } from 'ng2-file-upload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  hidden=true;
createPost() {
throw new Error('Method not implemented.');
}
  imageUrl: string = '';
  uploader: FileUploader = new FileUploader({
    url: 'https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload', // Replace with your Cloudinary upload URL
    method: 'POST',
    itemAlias: 'file',
    headers: [
      { name: 'X-Requested-With', value: 'XMLHttpRequest' },
    ]
  });

  postContent: string = '';
  taggedUsers: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.uploader.onSuccessItem = (item: FileItem, response: string, status: number, headers: any) => {
      const result: any = JSON.parse(response);
      this.imageUrl = result.secure_url;
    };
  }

  onImageSelected(event: any): void {
    const fileInput = event.target as HTMLInputElement;
    const file = (fileInput.files as FileList)[0];

  }






}
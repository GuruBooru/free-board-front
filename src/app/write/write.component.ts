import { Component, OnInit } from '@angular/core';
import { Posting } from '../Posting';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  formGroup: FormGroup;

  page_title = '[ SE 글쓰기 ]';

  /*
  postingID: number;  // 기존 카운트 get ?
  title: string;
  pContent: string;
  pWriter: string;
  pPassword: string;
  pDate: string;
  */

  number = 0;
  newTitle: string;

  // url: 'http://13.124.113.49:3000/';

  // public HttpClient 어쩌구저쩌구 추가해야됨!!
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formbuilder.group({
    title: ['', [Validators.required]],
    pContent: [''],
    pWriter: [''],
    pPassword: ['']
    });
  }

  // this.http.get(this.url + 'comment/' + 1).subscribe(commentList => this.commentList);

  // this.http.post(this.url + 'bord-posting', {cWriter, cPassword, this: this.contentNum, cContent, });

  // this.http.post(this.url + 'comment-posting', newComment).subscribe( () => this.getComment() );

  add_click(formGroup: FormGroup): void {
    this.newTitle = formGroup.get('title').value;

    const newPosting = {
      newTitle: formGroup.get('title').value,
      newContent: formGroup.get('pContent').value,
      newWriter: formGroup.get('pWriter').value,
      newPassword: formGroup.get('pPassword').value,
    };

    // this.http.post(this.url + 'comment-posting', newPosting).subscribe();
  }
}

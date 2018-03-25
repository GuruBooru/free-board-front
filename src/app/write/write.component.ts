import { Component, OnInit } from '@angular/core';
import { Posting } from '../Posting';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../shared/service/post/post.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {
  formGroup: FormGroup;

  posts$: Observable<any>;

  page_title = '[ SE 글쓰기 ]';

  number = 0;
  newTitle: string;
  postingId: string;

  // url: 'http://13.124.113.49:3000/';

  constructor(private formbuilder: FormBuilder, private postService: PostService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.postingId = this.route.snapshot.params.id;
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
    const newPosting = {
      title: formGroup.get('title').value,
      pContent: formGroup.get('pContent').value,
      pWriter: formGroup.get('pWriter').value,
      pPassword: formGroup.get('pPassword').value
    };

    this.postService.sendPost(newPosting).subscribe((res: any) => {
      if (res.result === 'success') {
        // list page로 이동
        this.router.navigate(['/']);
      }
    });

    // this.http.post(this.url + 'comment-posting', newPosting).subscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})

export class CommentComponent implements OnInit {
contentNum: number;
url: 'http://13.124.113.49:3000/';
commentList: any[] = [
  { postingID: 1,
    cWriter: '123123',
    cPassword: '123123',
    cDate: '2018-03-23T00:00:00.000Z',
    cContent: 'qweqwe',
    commentId: 1
  }
];

// temp: string;

  // HttpClient를 컴포넌트에 주입
  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.getComment();
  }

  postNewComment(cWriter: string, cPassword: string, cContent: string) {
    // DB로 댓글 전송
    // this.http.post(this.url + 'bord-posting', {cWriter, cPassword, this: '1', cContent, temp}).subscribe(() => this.getComment());
    // this.ngOnInit();
    const newComment = {Number: 1, cWriter, cPassword, cContent};
    this.http.post(this.url + 'comment-posting', newComment).subscribe( () => this.getComment() );
  }

  postReComment(cWriter: string, cPassword: string, cContent: string) {
    // DB로 댓글 전송
    // 비밀번호 확인 페이지로 이동
    // 비밀번호 일치시 DB로 수정된 댓글 전송
    this.http.post(this.url + 'bord-posting', {cWriter, cPassword, this: this.contentNum, cContent, });
  }

  postDelComment(cWriter: string, cPassword: string, cContent: string) {
    // 비밀번호 확인 페이지로 이동
    // 비밀번호 일치시 DB로 삭제할 댓글 전송
  }

  getComment() {
    // 해당 글번호의 댓글 DB에서 받음
    this.contentNum = 1 ;
    // this.http.get<string>(this.url + 'connect').subscribe(temp => this.temp = temp);
    this.http.get<any[]>(this.url + 'comment-list').subscribe(commentList => this.commentList = commentList,
      (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // 클라이언트 또는 네트워크 에러
        console.log(`Client-side error: ${err.error.message}`);
      } else {
        // 백엔드가 실패 상태 코드 응답
        console.log(`Server-side error: ${err.status}`);
      }
    });
    // this.http.get(this.url + 'comment/' + 1).subscribe(commentList => this.commentList);
  }
}

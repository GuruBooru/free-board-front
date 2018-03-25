import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../shared/service/comment/comment.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments$: Observable<any>;
  postID: number;

  // HttpClient를 컴포넌트에 주입
  constructor(private commentService: CommentService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // 라우터에서 postID를 받아옴
    this.postID = this.route.snapshot.params.id;
    this.comments$ = this.commentService.getComments(this.postID);
  }

  postNewComment(cWriter: string, cPassword: string, cContent: string) {
    // 새 댓글 생성
    const newComment = { postingID: this.postID, cWriter: cWriter, cPassword: cPassword, cContent: cContent };
    // 백엔드로 댓글 전송
    this.commentService.postComment(newComment).subscribe((res: any) => {
      if ( res.result === 'success') { // 성공시
        // 페이지 리로드(?)
        this.comments$ = this.commentService.getComments(this.postID);
      }
    });
  }

  postReComment(cWriter: string, cPassword: string, cContent: string) {
    // []속 주소를 가진 비밀번호 확인 페이지로 이동
    this.router.navigate(['/']);
    // 비밀번호 일치시 DB로 수정된 댓글 전송
  }

  postDelComment(cWriter: string, cPassword: string, cContent: string) {
    // 비밀번호 확인 페이지로 이동
    // 비밀번호 일치시 DB로 삭제할 댓글 전송
  }
}

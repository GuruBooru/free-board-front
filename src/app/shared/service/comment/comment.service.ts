import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommentService {

  url = 'http://13.124.113.49:3000';
  constructor(private http: HttpClient) { }

  getComments(id: number): Observable<any> {
    return this.http.get(this.url + `/comment/${id}`);
  }

  postComment(data: any) {
    return this.http.post(this.url + '/comment-posting', data);
  }

}

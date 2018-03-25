import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostService {

  constructor(private http: HttpClient) { }
  getPosts(): Observable<any> {
    return this.http.get('http://13.124.113.49:3000' + '/posting-head');
  }


  sendPost(data: any): Observable<any> {
    return this.http.post('http://13.124.113.49:3000' + '/board-posting', data);
  }
}

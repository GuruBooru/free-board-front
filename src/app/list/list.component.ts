import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  articles: Article[];
  constructor() {
    this.articles = [
      new Article('1', '테스트1', '홍승표', '2017-04-03'),
      new Article('2', '테스트2', '홍승표', '2018-03-03'),
      new Article('3', '테스트3', '홍승표', '2018-03-05')
    ];
   }

  ngOnInit() {
  }
}
export class Article {
  constructor(public postingID: string, public title: string, public pWriter: string, public pDate: string) {}
}

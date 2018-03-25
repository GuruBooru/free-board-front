import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: String;
  ngOnInit() {
    this.id = this.route.snapshot.params.id; // router에서 적은ㄱ 거
  }

}

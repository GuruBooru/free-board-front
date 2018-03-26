import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  loginFormGroup: FormGroup;
  id: String;
  password: String;
  user: FormGroup;
  constructor(private fb: FormBuilder) {
   }
  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      id: [' '],
      password: [' ']
      // origin:[' '], repeat:[' ']
    });
  }

  submit(fg: FormGroup) {
    this.id = fg.get('id').value;
    this.password = fg.get('password').value;
    this.user = fg.value;
    console.log(this.user);
  }
}

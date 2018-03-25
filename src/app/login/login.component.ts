import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  id: string;
  password: string;
  user: string;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginFormGroup = this.fb.group({
      id: [''],
      password: [''],
    });
  }
  submit(formGroup: FormGroup) {
    this.id = formGroup.get('id').value;
    this.password = formGroup.get('password').value;
    this.user = formGroup.value;
    console.log(this.user);
  }

}

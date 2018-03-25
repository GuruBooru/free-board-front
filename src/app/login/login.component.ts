import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id: string;
  password: string;
  user: any[];
  LoginFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.LoginFormGroup = this.fb.group({
      id: ['id'],
      password: ['password']
      /*
      password: {
        origin: [''],
        repeat: ['']
      }
      */
    });
  }

  submit(formGroup: FormGroup) {
    this.id = formGroup.get('id').value;
    this.password = formGroup.get('password').value;
    this.user = formGroup.value;
    console.log(this.user);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../shared/service/post/post.service';
import { Observable } from 'rxjs/Observable';


// import { AppService} from '../../';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
// providers : [appservice]
export class ReadComponent implements OnInit {
  posts$: Observable<any>;
  postingID: number;
  readform: FormGroup;
  // fb: FormBuilder;
 /* pName: String;
  pTime: String;
  pTitle: String;
  posting: String;
  pNum: String;
  postingInfo: any[];
  */
  constructor(private fb: FormBuilder, private postService: PostService, private route: ActivatedRoute , private router: Router) {
    //  this.createForm();
   // this.pName = 'hoho';
  }

  ngOnInit() {
    this.postingID = this.route.snapshot.params.id;
    this.posts$ = this.postService.getPosts(this.postingID);
   /* this.posts$.subscribe((res: any) => {
      if (res.result === 'sucess') {
      res = {
  result: 'success',
  msg: '정상작동',
  data: [{postid: ''}]
    });*/
      }

  navigate() {
    this.router.navigate(['/']); // 목록으로 가기
  }
}


// readform: FormGroup;

  /*modifyform: FormGroup;
  pName: String;
  pTime: String;
  pTitle: String;
  posting: String;
  pNum: number;
  postingInfo: any[];
*/
 /* */
  /*readForm = new FormGroup({
    name: new FormControl('작성자'),
    time: new FormControl('0'),
    posting: new FormControl('줄글')
  });

   readform = this.fb.group({
    pTime: [' '],
    pNum: [ ' '],
    pName: [ ' ' ],
    posting: [ ' '],
    pTitle: [' '],
  });*/

  /*get getName(): any {
    return this.readfrom.get('name');
  }
  ngAgterViewInit(): void {
    this.readForm.get('name').valueChanges.subscribe(data => this.nameChanges = data);
  }*/


   //  private fb: FormBuilder
   // ,private service: AppService
      // this.formload();




    // this.readform = new FormGroup({
    // });

  /*get gPostingInfo(): any[] {
    return this.postingInfo;
  }*/
    /*
     this.readform = this.fb.group({
       name: [ '작성자' ],
       time: [ ' '],
       posting: [ ' ']
     });
*/
/* get getpName(): any {
  return this.readform.get('pName');
}*/


// this.form.controls['your form control name'].value
  /* onSubmit() {

  }*/
/*  createForm() {
    this.readform = this.fb.group({
      pTime: [' ', Validators.required ],
      pNum: [' ', Validators.required ],
      pName: [' ', Validators.required ],
      posting: [' ', Validators.required ],
      pTitle: [' ', Validators.required ]
    });
  }



    formload() {
      this.pNum = this.postingInfo[0];
      this.pTitle = this.postingInfo[1];
      this.pName = this.postingInfo[2];
      this.posting = this.postingInfo[3];
      this.pTime = this.postingInfo[4];
    } */

import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup  } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private readonly avatarName = 'avatars'
  form: FormGroup;
  items: string[]
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  const img = `${this.avatarName}:svg-${Math.floor(Math.random()*16+1).toFixed(0)}`
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    this.items  =nums.map(d=>`avatars:svg-${d}`);
    this.form = this.fb.group({
      email:[],
      name:[],
      password:[],
      repeat:[],
      avatar:[img]
    })
  }

  onSubmit(form,ev:Event){

  }

}

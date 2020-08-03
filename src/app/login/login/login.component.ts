import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  quote:{
    cn:"么么哒",
    en:"mmeda",
    pic:'a.png'
  }
  constructor() {
    this.quote={
      cn:"么么哒",
      en:"mmeda",
      pic:'a.png'
    }
  }

  ngOnInit(): void {
  }

}

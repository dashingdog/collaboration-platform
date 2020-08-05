import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  quote={
    cn:"么么哒",
    en:"mmeda",
    pic:'assets/img/quote_fallback.jpg'
  }
  constructor() {

  }

  ngOnInit(): void {

  }

}

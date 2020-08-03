import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';
import { LoginRoutingModule } from './login-routing.module'
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LoginComponent, ForgotComponent, RegisterComponent],
  imports: [
    LoginRoutingModule,
    SharedModule,
  ]
})
export class LoginModule { }

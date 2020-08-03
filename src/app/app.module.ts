import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { CoreModule } from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
=======
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './login/login-routing.module'
>>>>>>> a0f05fd63cd75b5d5a2a4ef042de34d917850cb2
import { LoginModule } from './login/login.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
<<<<<<< HEAD
=======
    SharedModule,
    LoginRoutingModule,
>>>>>>> a0f05fd63cd75b5d5a2a4ef042de34d917850cb2
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core/core.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './login/login-routing.module'
import { LoginModule } from './login/login.module'
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    LoginRoutingModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

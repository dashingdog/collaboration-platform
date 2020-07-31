import { NgModule,SkipSelf,Optional} from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconRegistry } from "@angular/material/icon"
import { DomSanitizer } from "@angular/platform-browser";
import { loadSvgResources } from "../utils/svg.util"
import { HttpClientModule } from '@angular/common/http'
import { SharedModule } from '../shared/shared.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    MatSidenavModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  // 不导出的话，只能在当前模块使用
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MatSidenavModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent:CoreModule , ir:MatIconRegistry,ds:DomSanitizer){
    if(parent){
      throw new Error("模块已经存在，不能再次加载！");
    }
    loadSvgResources(ir,ds);
  }
 }

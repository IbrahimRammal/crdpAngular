import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService} from './shared/services';
import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './pages/user/user.component';
import { DetailViewComponent } from './pages/detail-view/detail-view.component';
import { DxTabsModule,DxDataGridModule,DxSelectBoxModule ,DxFormModule ,DxTabPanelModule,DxCheckBoxModule   } from 'devextreme-angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import dxTabPanel from 'devextreme/ui/tab_panel';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DetailViewComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule,
    HttpClientModule,
    DxTabsModule,
    DxDataGridModule,
    DxSelectBoxModule ,
    DxFormModule ,
    DxTabPanelModule ,
    DxCheckBoxModule
  ],
  providers: [
    AuthService,
    ScreenService,
    AppInfoService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

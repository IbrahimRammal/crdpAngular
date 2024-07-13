import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { locale, loadMessages } from "devextreme/localization";
import { TokenStorageService } from './shared/services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'المركز التربوي';
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }
  private role: string ='';
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  user:any={}
  viewAside=true;

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService,
    private tokenStorageService: TokenStorageService
  ) {
    // document.documentElement.dir = "rtl";
    // locale(navigator.language);
    locale("ar");
   }

  // isAuthenticated() {
  //   return this.authService.loggedIn;
  // }


  ngOnInit(): void {
    this.authService.isLoggedIn=this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.role = user.role;
      this.username = user.username;
      this.user=user
    }
  }
}

  


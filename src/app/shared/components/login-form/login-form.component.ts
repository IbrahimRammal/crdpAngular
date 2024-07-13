import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../../services';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loading = false;
  formData: any = {};
  username: string = "";
  password: string = "";
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string = '';
  constructor(private authService: AuthService, private router: Router,private tokenStorage: TokenStorageService) { }

  async onSubmit(e: Event) {
    e.preventDefault();
    const { email, password } = this.formData;
    this.loading = true;
   
    var result =  this.authService.logIn(email, password).subscribe({
      next: data => {
        if (data.status == "ok") {
          //false
          this.tokenStorage.saveToken(data.accessToken);
          // this.tokenStorage.saveUser(data.result);
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.role = this.tokenStorage.getUser().role;
          this.loading = false;
          window.location.href = '/home';
          // this.authService.getUserPermissions().subscribe(
          //   {
          //     next: permissionList => {
          //       this.tokenStorage.saveUserPerms(permissionList)
          //       this.openDashboard();
          //     }
          //   });
        }
        else {
          //false
          this.errorMessage = data.message;
        }
      },

      error: err => {
        //true
        this.loading = false;
       notify(err.error.title, 'error', 2000);
        console.log("error is ", err)
        this.errorMessage = err;
      }
    });
  }
    
  //   if (!result.isOk) {
  //     this.loading = false;
  //     notify(result.message, 'error', 2000);
  //   }
  // }

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ]
})
export class LoginFormModule { }

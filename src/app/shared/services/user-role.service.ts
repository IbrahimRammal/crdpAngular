import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient, HttpHeaders, HttpXhrBackend } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { GlobalVars } from 'src/config/settings';
const AUTH_API = GlobalVars.BACKEND_API+'/UserRole/'
@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor() { }
}

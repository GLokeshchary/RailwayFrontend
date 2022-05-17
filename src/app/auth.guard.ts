import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  isLoggedin:boolean|undefined;
  constructor(private tokenstorage:TokenStorageService,private router:Router){}

  canActivate():boolean{
    this.isLoggedin=!!this.tokenstorage.getToken();

    if (this.isLoggedin) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

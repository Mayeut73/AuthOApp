import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate} from '@angular/router';
import {AuthServices} from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _auth: AuthServices, private router:Router){

    }

    canActivate(next : ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this._auth.authenticated()){
            console.log('Auth Guard Passed');
            return true;
        } else {
            console.log('BLOCKED BY AUTH GUARD');
            this.router.navigate(['/']);
            return false;
        }
    }
}
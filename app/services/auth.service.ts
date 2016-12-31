import { Injectable } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import {options} from '../auth.options';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthServices {
    //Configure Auth0Lock
    lock = new Auth0Lock('ijOGNtONdECBZH8Xg6vYa30P0vSfYr0X',
        'mayeut.eu.auth0.com', options);

    constructor() {
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult: any) => {
            this.lock.getProfile(authResult.idToken, function (err: any, profile: any) {
                if (err) {
                    throw new Error(err);
                }
                //Set profile
                localStorage.setItem('profile', JSON.stringify(profile));
                //Set Token
                localStorage.setItem('id_token', authResult.idToken);
            })
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    }

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    }

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('profile');
        // Remove token from localStorage
        localStorage.removeItem('id_token');
    }
}
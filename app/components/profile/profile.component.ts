import { Component } from '@angular/core';
import { AuthServices } from '../../services/auth.service';

@Component({
  moduleId : module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent  {;
  profile:any

  constructor(private auth: AuthServices) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    console.log(this.profile);
  }
 }

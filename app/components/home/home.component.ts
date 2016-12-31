import { Component } from '@angular/core';
import { AuthServices } from '../../services/auth.service';

@Component({
  moduleId : module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent  {

    constructor(private _Auth: AuthServices) {

  }
 }

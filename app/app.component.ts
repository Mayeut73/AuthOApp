import { Component } from '@angular/core';
import { AuthServices } from './services/auth.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private _Auth: AuthServices) {

  }

}

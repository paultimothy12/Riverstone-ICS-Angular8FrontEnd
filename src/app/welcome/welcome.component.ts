import {Component} from '@angular/core';
import {AuthService} from '../security/auth-context';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  name = '';

  constructor(public authService: AuthService) {
    this.name = this.authService.userName;
  }
}

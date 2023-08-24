import { Component, OnInit } from '@angular/core';
import {AuthService} from "../security/auth-context";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  secondsLeft = 5;
  constructor(public authService: AuthService, private router: Router) {
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }
  ngOnInit() {
    setInterval((): void => {
      this.secondsLeft = this.secondsLeft-1;
    }, 1000);
    setTimeout(() => {
        this.logout();
      },5000);
  }
}

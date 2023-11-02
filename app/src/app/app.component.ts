import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {CategoryService} from './services/category.service';
import {AuthenticationService} from './services/authentication.service';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  constructor(private categoryService: CategoryService, private router: Router, private authenticationService: AuthenticationService, private userService: UserService) { }

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url == "/") {
          this.categoryService.selectCategory(0);
        }
      }
    });

    if (this.authenticationService.isLoggedIn()) {
      this.authenticationService.loginSubject.next(true);
      this.userService.updateLoggedUser();
    }
  }

  public ngOnDestroy(): void {

  }
}

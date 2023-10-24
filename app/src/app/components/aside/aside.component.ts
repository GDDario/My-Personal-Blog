import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit, OnDestroy {
  public user: User;
  public userSubscription: Subscription;
  public loginSubscription: Subscription;

  constructor(private authenticationService: AuthenticationService, private userService: UserService) {}

  public ngOnInit(): void {
    this.userSubscription = this.userService.currentUser.subscribe((user: User) => {
      this.user = user;
    });
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

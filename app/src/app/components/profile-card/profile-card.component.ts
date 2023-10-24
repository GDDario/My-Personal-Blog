import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit, OnDestroy {
  public user: User;
  private userSubscription: Subscription;

  constructor(private userService: UserService) { }

  public ngOnInit(): void {
   this.userSubscription = this.userService.currentUser.subscribe((user: User) => {
      this.user = user;
   });
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PostService } from 'src/app/services/post.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-activity-page',
  templateUrl: './user-activity-page.component.html',
  styleUrls: ['./user-activity-page.component.css']
})
export class UserActivityPageComponent implements OnInit {
  public user: User;
  public lastPostsRead: Post[] = [];
  public mentions: number = 0;
  public pageIndex: number = 1;
  public userSubscription: Subscription;

  constructor(private userService: UserService, private postService: PostService, private authenticationService: AuthenticationService) { }

  public ngOnInit(): void {
    this.userSubscription = this.userService.currentUser.subscribe((user: User) => {
      this.user = user;
    });

  }

  handlePageEvent(event: PageEvent): void {

  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

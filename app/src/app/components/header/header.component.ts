import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AuthenticationDialogComponent } from '../dialogs/authentication-dialog/authentication-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild("searchInput") public searchInput: ElementRef;
  public user: User = new User({});
  public userSubscription: Subscription;

  constructor(private router: Router, private authenticationService: AuthenticationService, private matDialog: MatDialog, private snackBar: MatSnackBar, private userService: UserService) { }

  public ngOnInit(): void {
    this.userSubscription = this.userService.currentUser.subscribe((user: User) => {
      this.user = user;
    });
  }

  public onSearch(event: Event): void {
    if (event instanceof KeyboardEvent) {
      if (event.key != "Enter")
        return;
    }
    let search: string = this.searchInput.nativeElement.value;

    if (search.trim() != "") {
      this.router.navigate(["/search"], { queryParams: { value: search } });
      this.searchInput.nativeElement.value = "";
    }
  }

  public login(): void {
    this.authenticationService.openLoginDialog();
  }

  public logout(): void {
    localStorage.removeItem("token");
    this.authenticationService.loginSubject.next(false);
    this.userService.currentUser.next(null);
    this.snackBar.open("Logged out", "dismiss", {
      panelClass: ["snackbar"],
      horizontalPosition: "right",
      verticalPosition: "top",
      duration: 1500,
    });
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

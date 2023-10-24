import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ChangePasswordDialogComponent } from 'src/app/components/dialogs/change-password-dialog/change-password-dialog.component';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-account-settings-page',
  templateUrl: './account-settings-page.component.html',
  styleUrls: ['./account-settings-page.component.css']
})
export class AccountSettingsPageComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public user: User;
  public password: string;
  public passwordHide: boolean = true;
  public userSubscription: Subscription;
  @ViewChild("pictureSelector") private pictureSelector: ElementRef;

  constructor(private userService: UserService, private matDialog: MatDialog) { }

  public ngOnInit(): void {
    this.userSubscription = this.userService.currentUser.subscribe((user: User) => {
      this.user = user;
    });

    this.form = new FormGroup({
      username: new FormControl(this.user.getUsername(), Validators.required),
      email: new FormControl(this.user.getEmail(), [Validators.required, Validators.email]),
    });
  }

  openPictureSelector(): void {
    this.pictureSelector.nativeElement.click();
  }

  public getEmailError(): string {
    if (this.form.controls["email"].hasError("required")) {
      return "You must enter a value";
    }

    return this.form.controls["email"].hasError("email") ? "Not a valid email" : "";
  }

  public onSubmit(): void {
    console.log(this.form);
  }

  public openDialogChangePassword(): void {
    this.matDialog.open(ChangePasswordDialogComponent, {
      width: "500px",
    });
  }

  public ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

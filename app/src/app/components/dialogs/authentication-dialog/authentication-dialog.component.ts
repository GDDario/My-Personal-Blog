import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-authentication-dialog',
  templateUrl: './authentication-dialog.component.html',
  styleUrls: ['./authentication-dialog.component.css']
})
export class AuthenticationDialogComponent implements OnInit {
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public loginPasswordHide: boolean = true;
  public registerPasswordHide: boolean = true;
  public repeatRegisterPasswordHide: boolean = true;
  public loginSubscription: Subscription;

  constructor(
    public dialogRef: MatDialogRef<AuthenticationDialogComponent>,
    private authenticationService: AuthenticationService,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  public ngOnInit(): void {
    this.loginForm = new FormGroup(
      {
        "email": new FormControl(null, [Validators.required, Validators.email]),
        "password": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      }
    );
    this.registerForm = new FormGroup({
      "fullName": new FormControl(null, [Validators.required]),
      "username": new FormControl(null, [Validators.required]),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "password": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "repeatPassword": new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  public getEmailError(): string {
    if (this.loginForm.controls["email"].hasError("required")) {
      return "You must enter a value";
    }

    return this.loginForm.controls["email"].hasError("email") ? "Not a valid email" : "";
  }

  public close(): void {
    this.dialogRef.close();
  }

  public login(): void {
    if (this.loginForm.valid) {
      this.authenticationService.login(this.loginForm.get("email").getRawValue(), this.loginForm.get("password").getRawValue()).subscribe((result) => {
        this.snackBar.open("logged successfully", "dismiss", {
          panelClass: ["snackbar"],
          horizontalPosition: "right",
          verticalPosition: "top",
          duration: 1500
        });
        if (result["token"] != null) {
          localStorage.setItem("token", result["token"]);
          this.authenticationService.loginSubject.next(true);
          this.userService.updateLoggedUser();
        } else {
          this.snackBar.open("Invalid credentials", "dismiss", {
            panelClass: ["snackbar"],
            horizontalPosition: "right",
            verticalPosition: "top",
            duration: 1500
          });
        }
      }, error => {
        this.snackBar.open("Invalid credentials", "dismiss", {
          panelClass: ["snackbar"],
          horizontalPosition: "right",
          verticalPosition: "top",
          duration: 1500
        });
      }, () => {
        this.dialogRef.close();
      });
    }
  }
}

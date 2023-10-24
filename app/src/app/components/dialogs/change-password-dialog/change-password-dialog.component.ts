import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './change-password-dialog.component.html',
  styleUrls: ['./change-password-dialog.component.css']
})
export class ChangePasswordDialogComponent implements OnInit {
  public form: FormGroup;
  public oldPasswordHide: boolean = true;
  public newPasswordHide: boolean = true;
  public repeatNewPasswordHide: boolean = true;

  constructor(private dialogRef: DialogRef, private userService: UserService) {}

  public ngOnInit(): void {
    this.form = new FormGroup(
      {
        "oldPassword": new FormControl(null, [Validators.required, Validators.minLength(3)]),
        "newPassword": new FormControl(null, [Validators.required, Validators.minLength(3)]),
        "repeatNewPassword": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      });
  }

  public close(): void {
    this.dialogRef.close();
  }
}

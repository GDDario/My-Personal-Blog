import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import api from "../../assets/json/api.json";
import { BehaviorSubject } from 'rxjs';
import { AuthenticationDialogComponent } from '../components/dialogs/authentication-dialog/authentication-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public loginSubject = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private matDialog: MatDialog) { }

  public login(email: string, password: string) {
    const userLoginData = {
      "email": email, "password": password,
    };
    console.log(userLoginData);

    let httpOptions = {
      headers: new HttpHeaders({ "Content-Type": "application/json", "charset": "UTF8" })
    };

    return this.httpClient.post(api.path + "/auth/authenticate", {
      "email": email, "password": password,
    }, httpOptions);
  }

  public isLoggedIn(): boolean {
    return localStorage.getItem("token") != null;
  }

  public getToken(): string {
    return localStorage.getItem("token") ?? "";
  }

  public openLoginDialog(): void {
    this.matDialog.open(AuthenticationDialogComponent, {
      width: "500px",
    });
  }
}

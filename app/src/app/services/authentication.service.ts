import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import api from "../../assets/json/api.json";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public loginSubject = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

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
}

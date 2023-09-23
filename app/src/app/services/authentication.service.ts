import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import api from "../../assets/json/api.json";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl: string = api.path;
  public loginSubject = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient) { }

  public login(email: string, password: string) {
    const userLoginData = {
      email, password,
    };
    return this.httpClient.post(this.apiUrl, userLoginData);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { User } from '../models/user.model';
import api from 'src/assets/json/api.json';
import { AuthenticationService } from './authentication.service';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }

  public updateLoggedUser(): void {
    this.httpClient.get(`${api.path}/user/auth`).subscribe((response: UserInterface) => {
      let user = new User({});
      user.setId(response.id);
      user.setUsername(response.username);
      user.setEmail(response.email);
      user.setAbout(response.about);
      user.setPicture(response.picture);
      user.setFavoriteTopics(response.favoriteTopics);
      user.setRegisterDate(response.registerDate);
      user.setPostsRead(response.postsRead);
      user.setCommentsMade(response.commentsMade);
      this.currentUser.next(user);
    }, error => {
      this.currentUser.next(null);
    });
  }

  public getPassword(): string {
    return "123";
  }

  public updatePassword(): void {

  }
}

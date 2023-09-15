import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User {
    return new User({id: 1, fullName: "Gabriel Donizetti Dário", username: "GDDario", email: "gd.dario.dev@gmail.com", registerDate: new Date(), postsRead: 53, commentsMade: 5});
  }
}

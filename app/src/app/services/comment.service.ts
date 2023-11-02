import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Comment } from 'src/app/models/comment.model';
import { mockComments } from 'src/assets/mock/comments.mock';
import { CommentInterface } from '../interfaces/comment.interface';
import api from 'src/assets/json/api.json';
import { RequestCommentInterface } from '../interfaces/request-comment.interface';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { newCommentInterface } from '../interfaces/new-comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public commentSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public refreshSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService, private userService: UserService) { }

  /**
   * @param postId the post of the current comment section.
   * @return an array of posts.
   */
  public getComments(postId: number): Observable<RequestCommentInterface[]> {
    let userId: number = 0;
    if (this.authenticationService.isLoggedIn() && this.userService.currentUser.value != null) {
      userId = this.userService.currentUser.value.getId();
    }

    return this.httpClient.get<RequestCommentInterface[]>(`${api.path}/comment/post/${postId}/${userId}`);
  }

  public postComment(newComment: newCommentInterface) {
    return this.httpClient.post(`${api.path}/comment`, {
      "userId": this.userService.currentUser.value.getId(),
      "postId": newComment.postId,
      "content": newComment.content,
      "date": newComment.date
    });
  }

  public deleteComment(id: number): Observable<Object> {
    return this.httpClient.delete(`${api.path}/comment/${id}`);
  }

  public addLike(commentId: number): Observable<Object> {
    return this.httpClient.post(`${api.path}/comment/like`, {
      "userId": this.userService.currentUser.value.getId(),
      "commentId": commentId,
    });
  }

  public removeLike(commentId: number): Observable<Object> {
    return this.httpClient.put(`${api.path}/comment/like`, {
      "userId": this.userService.currentUser.value.getId(),
      "commentId": commentId,
    });
  }
}

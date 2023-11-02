import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostInterface} from '../interfaces/post.interface';
import api from 'src/assets/json/api.json';
import {Observable} from 'rxjs';
import {UserService} from "./user.service";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient, private userService: UserService) { }

  /**
   * @param page page number to be loaded. Each page has the maximum size of 10 posts.
   * @returns an array of posts.
   */
  public getLastPosts(page: number): Observable<PostInterface[]> {

    return this.httpClient.get<PostInterface[]>(`${api.path}/post?page=${page}`);
  }

  /**
   * @param categoryId the id value of category post.
   * @returns an array of posts.
   *
   */
  public getByCategory(categoryId: number): Observable<PostInterface[]> {
    return this.httpClient.get<PostInterface[]>(`${api.path}/post/category/${categoryId}`);
  }

  /**
   * This method searchs for titles and contents.
   * @param search the value being searched.
   * @returns posts related.
   */
  public getBySearch(search: string) {
    return [];
  }

  public getByUrlPath(urlParam: string): Observable<PostInterface> {
    return this.httpClient.get<PostInterface>(`${api.path}/post/url-param/${urlParam}`);
  }

  /**
   * @param userId the user id for searching the posts.
   * @returns the last 7 posts read by the user.
   */
  public getLastPostsRead() {
    // return this.posts
  }

  public markAsRead(postId: number): void {
    let userId: number = this.userService.currentUser.value.getId();
    let date: Date = new Date();
    this.httpClient.put(`${api.path}/post/user`, {
      "userId": userId,
      "postId": postId,
      "date": date.toISOString()
    }).subscribe();
  }

  public getIsAlreadyRead(postId: number): Observable<Object> {
    return this.httpClient.get(`${api.path}/post/isRead/${postId}`);
  }
}

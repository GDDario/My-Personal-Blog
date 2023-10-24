import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Comment } from 'src/app/models/comment.model';
import { mockComments } from 'src/assets/mock/comments.mock';
import { CommentSubjectInterface } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  public isCommenting: BehaviorSubject<CommentSubjectInterface> = new BehaviorSubject<CommentSubjectInterface>({"index": 0, "isCommenting": false});

  constructor() { }

  /**
   * @param postId the post of the current comment section.
   * @return an array of posts.
   */
  public getComments(postId: number): Comment[] {
    return mockComments;
  }

  public postComment(comment: Comment) {

  }
}

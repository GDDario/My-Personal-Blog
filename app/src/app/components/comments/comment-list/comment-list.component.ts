import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RequestCommentInterface } from 'src/app/interfaces/request-comment.interface';
import { Comment } from 'src/app/models/comment.model';
import { User } from 'src/app/models/user.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CommentService } from 'src/app/services/comment.service';
import { AuthenticationDialogComponent } from '../../dialogs/authentication-dialog/authentication-dialog.component';
import { NewCommentComponent } from '../new-comment/new-comment.component';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit, OnDestroy {
  @Input({ required: true }) public postId;
  @ViewChild("newComment", { read: ViewContainerRef }) public newComment: ViewContainerRef;
  private commentSubscription: Subscription;
  private loginSubscription: Subscription;
  private refreshSubscription: Subscription;
  private isCommenting: boolean = false;
  public isLoggedIn: boolean = false;
  public comments: Comment[] = [];

  constructor(private commentService: CommentService, private authenticationService: AuthenticationService, private matDialog: MatDialog, private componentFactoryResolver: ComponentFactoryResolver) { }

  public ngOnInit(): void {
    this.refreshSubscription = this.commentService.refreshSubject.subscribe((refresh: boolean) => {
      if (refresh) this.getComments();
    });
    this.verifyLogin();
    this.handleComment();
    this.getComments();
  }

  private verifyLogin(): void {
    this.loginSubscription = this.authenticationService.loginSubject.subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  private handleComment() {
    this.commentSubscription = this.commentService.commentSubject.subscribe((isCommenting: boolean) => {
      this.isCommenting = isCommenting;
      if (!isCommenting && this.newComment != null) {
        this.newComment.remove();
      }
    })
  }

  private getComments(): void {
    this.comments = [];
    this.commentSubscription = this.commentService.getComments(this.postId).subscribe((comments: RequestCommentInterface[]) => {
      for (let i = 0; i < comments.length; i++) {
        let comment: Comment = new Comment({
          id: comments[i].id,
          user: new User({
            id: comments[i].user.id,
            username: comments[i].user.username,
            postsRead: comments[i].user.postsRead,
            commentsMade: comments[i].user.commentsMade,
            picture: comments[i].user.picture
          }),
          likes: comments[i].likes,
          content: comments[i].content,
          date: comments[i].date,
          editedDate: comments[i].editedDate,
          isLiked: comments[i].currentUserLiked
        });
        this.comments.push(comment);
      }
    }, error => {

    });
  }

  public login(): void {
    this.authenticationService.openLoginDialog();
  }

  public addComment(): void {
    if (!this.isCommenting) {
      this.commentService.commentSubject.next(true);
      const factory = this.componentFactoryResolver.resolveComponentFactory(NewCommentComponent);
      const componentRef = factory.create(this.newComment.injector);
      const newCommentInstance = componentRef.instance;
      newCommentInstance.postId = this.postId;
      this.newComment.insert(componentRef.hostView);
    }
  }

  public ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
    this.commentSubscription.unsubscribe();
    this.refreshSubscription.unsubscribe();
  }
}

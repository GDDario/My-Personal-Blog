import { Component, ComponentFactoryResolver, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit, OnDestroy {
  @Input({ required: true }) public comment: Comment;
  @Input() public index: number;
  @Input() public parentIndex: number;
  @ViewChild("newComment", { read: ViewContainerRef }) public newComment: ViewContainerRef;
  public isloadingLike: boolean = false;
  public isShowDelete: boolean = false;

  constructor(private authenticationService: AuthenticationService, private userService: UserService, private commentService: CommentService, private snackBar: MatSnackBar) { }

  public ngOnInit(): void {
    if (this.authenticationService.isLoggedIn() && this.userService.currentUser.value.getId() == this.comment.getUser().getId()) {
      this.isShowDelete = true;
    }
  }

  public getImagePath(): string {
    return `../../../assets/img/users/${this.comment.getUser().getPicture()}`;
  }

  public likeComment(): void {
    if (this.isloadingLike) {
      return;
    }

    if (!this.authenticationService.isLoggedIn()) {
      this.authenticationService.openLoginDialog();
      return;
    }

    if (!this.comment.getIsLiked()) {
      this.commentService.addLike(this.comment.getId()).subscribe(() => {
        this.comment.addLike();
        this.comment.setIsLiked(true);
      });
    } else {
      this.commentService.removeLike(this.comment.getId()).subscribe(() => {
        this.comment.removeLike();
        this.comment.setIsLiked(false);
      });
    }
  }

  public deleteComment(): void {
    this.commentService.deleteComment(this.comment.getId()).subscribe((result: boolean) => {
      this.commentService.refreshSubject.next(true);
      this.snackBar.open("Comment created", "dismiss", {
        panelClass: ["snackbar"],
        horizontalPosition: "right",
        verticalPosition: "top",
        duration: 1500,
      });
    });
  }

  public ngOnDestroy(): void {
  }
}

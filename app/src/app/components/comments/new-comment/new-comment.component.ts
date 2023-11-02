import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { newCommentInterface } from 'src/app/interfaces/new-comment.interface';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  public postId: number;
  public form: FormGroup;
  public content: string;

  constructor(private commentService: CommentService, private snackBar: MatSnackBar) {
  }

  public ngOnInit(): void {
    this.form = new FormGroup(
      {
        "content": new FormControl(null, [Validators.required]),
      },
    );
  }

  public postComment(): void {
    const date = new Date();
    let comment: newCommentInterface = {
      postId: this.postId,
      content: this.form.get("content").value,
      date: date.toISOString()
    };
    this.commentService.postComment(comment).subscribe(((reponse: Comment) => {
      this.commentService.commentSubject.next(false);
      this.snackBar.open("Comment created", "dismiss", {
        panelClass: ["snackbar"],
        horizontalPosition: "right",
        verticalPosition: "top",
        duration: 1500,
      });
      this.commentService.refreshSubject.next(true);
    }));
  }

  public discardComment(): void {
    this.commentService.commentSubject.next(false);
  }
}

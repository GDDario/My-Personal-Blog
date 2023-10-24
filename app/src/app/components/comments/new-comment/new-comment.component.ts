import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {
  public parentIndex: number = null;
  public index: number;
  public form: FormGroup;

  constructor(private commentService: CommentService) {
  }

  public ngOnInit(): void {
    this.form = new FormGroup(
      {
        "newComment": new FormControl(null, [Validators.required]),
      },
    );
  }

  public postComment(): void {
    const comment = new Comment({});
    this.commentService.postComment(comment);
  }

  public discardComment(): void {
    if (this.index != null) this.commentService.isCommenting.next({"index": this.index, "isCommenting": false, "parentIndex": this.parentIndex});
  }
}

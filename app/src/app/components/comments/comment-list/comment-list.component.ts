import { Component, Input, Renderer2 } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent {
  public comments: Comment[] = [];
  @Input({required: true}) public postId;

  constructor(private commentService: CommentService, private renderer: Renderer2) { }

  public ngOnInit(): void {
    this.comments = this.commentService.getComments(this.postId);
  }
}

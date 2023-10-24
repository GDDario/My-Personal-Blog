import { Component, ComponentFactoryResolver, ElementRef, Input, OnDestroy, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';
import { NewCommentComponent } from '../new-comment/new-comment.component';
import { Subscription } from 'rxjs';
import { CommentSubjectInterface } from 'src/app/interfaces/comment.interface';

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
  public subscription: Subscription;

  constructor(private commentService: CommentService, private componentFactoryResolver: ComponentFactoryResolver) { }

  public ngOnInit(): void {
    this.subscription = this.commentService.isCommenting.subscribe((callback: CommentSubjectInterface) => {
      if (this.newComment != null && this.newComment.get(0) != null) {
        if (callback.index == this.index && callback.parentIndex == null) {

          this.newComment.remove(0);
        } else if (callback.index == this.index && callback.parentIndex != null && this.parentIndex == callback.parentIndex) {
          this.newComment.remove(0);
        }
      }
    })
  }

  public getImagePath(): string {
    const defaultPath = "../../../assets/img/";
    return defaultPath + this.comment.getUser().getPicture();
  }

  public likeComment(commentId: number): void {

  }

  public addComment(): void {
    if (!this.newComment != null && this.newComment.get(0) == null) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(NewCommentComponent);

      // Create an instance of the component
      const componentRef = factory.create(this.newComment.injector);

      const componentInstance = componentRef.instance as NewCommentComponent;

      // Add a TypeScript attribute to the component instance
      componentInstance.index = this.index;
      if (this.parentIndex != null)
        componentInstance.parentIndex = this.parentIndex;

      this.newComment.insert(componentRef.hostView);

      // Access the root DOM element of the component
      const componentRootElement = componentRef.location.nativeElement;
    }
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

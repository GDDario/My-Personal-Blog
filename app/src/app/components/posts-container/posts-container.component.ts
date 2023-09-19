import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-posts-container',
  templateUrl: './posts-container.component.html',
  styleUrls: ['./posts-container.component.css']
})
export class PostsContainerComponent {
  @Input({required: true}) postList: Post[];
  @Input({required: true}) isLoading: boolean;
}

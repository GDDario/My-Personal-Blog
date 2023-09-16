import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-card-mini',
  templateUrl: './post-card-mini.component.html',
  styleUrls: ['./post-card-mini.component.css']
})
export class PostCardMiniComponent {
  @Input({required: true}) post: Post;
}

import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-card-big',
  templateUrl: './post-card-big.component.html',
  styleUrls: ['./post-card-big.component.css']
})
export class PostCardBigComponent {
  @Input({"required": true}) public post: Post;
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardMiniComponent } from './post-card-mini.component';

describe('PostCardMiniComponent', () => {
  let component: PostCardMiniComponent;
  let fixture: ComponentFixture<PostCardMiniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCardMiniComponent]
    });
    fixture = TestBed.createComponent(PostCardMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

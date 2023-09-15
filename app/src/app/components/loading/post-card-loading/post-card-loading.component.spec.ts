import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardLoadingComponent } from './post-card-loading.component';

describe('PostCardLoadingComponent', () => {
  let component: PostCardLoadingComponent;
  let fixture: ComponentFixture<PostCardLoadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCardLoadingComponent]
    });
    fixture = TestBed.createComponent(PostCardLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

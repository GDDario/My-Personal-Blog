import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPostsPageComponent } from './categories-posts-page.component';

describe('CategoriesPostsPageComponent', () => {
  let component: CategoriesPostsPageComponent;
  let fixture: ComponentFixture<CategoriesPostsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesPostsPageComponent]
    });
    fixture = TestBed.createComponent(CategoriesPostsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/models/category.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  public categories: Category[];
  private subscription: Subscription;

  constructor(private categoryService: CategoryService, private router: Router) { }

  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories;
    });

    this.subscription = this.categoryService.categorySubject.subscribe((category: Category) => {
      this.categoryService.selectCategory(category.getId());
    });
  }

  public handleClick(category: Category): void {
    this.categoryService.categorySubject.next(category);
    this.router.navigate(["categories", category.getId()]);
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

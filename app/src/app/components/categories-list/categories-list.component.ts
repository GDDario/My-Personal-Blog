import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  public categories: Category[] = [];
  public categoriesSubscription: Subscription;

  constructor(private categoryService: CategoryService, private router: Router) { }

  public ngOnInit(): void {
    this.categoryService.loadCategories();
    this.categoriesSubscription = this.categoryService.categoriesSubject.subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  public handleClick(category: Category): void {
    this.router.navigate(["categories", category.getId()]);
  }

  public ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
  }
}

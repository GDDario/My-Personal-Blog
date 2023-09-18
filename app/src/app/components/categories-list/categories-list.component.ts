import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { Category } from 'src/app/models/categorie.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit, OnDestroy {
  public categories: Category[];
  private categorySubscription: Subscription;

  constructor(private categoryService: CategoryService, private router: Router) { }

  public ngOnInit(): void {
    this.categories = this.categoryService.getCategories();

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.urlAfterRedirects == "/" || event.urlAfterRedirects == "/contact" || event.urlAfterRedirects == "/about") {
          this.selectCategory(0); // Selects category 0 to unmark all of them
        } else {
          if (this.categoryService.categoryObservable != null) {
            this.categorySubscription = this.categoryService.categoryObservable.subscribe((category: Category) => {
              this.selectCategory(category.getId());
            });
          }
        }
      });
  }

  public handleClick(id: number): void {
    this.router.navigate(["categories", id]);
    this.selectCategory(id);
  }

  private selectCategory(id: number): void {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].getId() == id) {
        this.categories[i].select();
      } else {
        this.categories[i].unselect();
      }
    }
  }

  public ngOnDestroy(): void {
    if (this.categorySubscription != null) this.categorySubscription.unsubscribe();
  }
}

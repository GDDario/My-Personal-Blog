import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categorySubject = new BehaviorSubject<Category>(new Category({id: 0}));

  private categories: Category[] = [
    new Category({ id: 1, name: "Open Source" }),
    new Category({ id: 2, name: "Free" }),
    new Category({ id: 3, name: "Linux" }),
    new Category({ id: 4, name: "Hardware" }),
    new Category({ id: 5, name: "Software" }),
  ];

  public getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  public getById(id: number): Category {
    let category: Category = new Category({id: 1, name: "Open Source"});
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].getId() == id) {
        category = this.categories[i];
      }
    }
    return category;
  }

  public selectCategory(id: number): void {
    for (let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].getId() == id) {
        this.categories[i].select();
      } else {
        this.categories[i].unselect();
      }
    }
  }
}

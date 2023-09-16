import { Injectable } from '@angular/core';
import { Category } from '../models/categorie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public observedCategory: Observable<Category>;

  private categories: Category[] = [
    new Category({ id: 1, name: "Open Source" }),
    new Category({ id: 2, name: "Free" }),
    new Category({ id: 3, name: "Linux" }),
    new Category({ id: 4, name: "Hardware" }),
    new Category({ id: 5, name: "Software" }),
  ];

  constructor() { }

  public getCategories(): Category[] {
    return this.categories;
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
}

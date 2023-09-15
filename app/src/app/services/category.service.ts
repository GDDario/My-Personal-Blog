import { Injectable } from '@angular/core';
import { Category } from '../models/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private categories: Category[] = [new Category({ id: 1, name: "Open Source" }), new Category({ id: 2, name: "Free" }), new Category({ id: 3, name: "Linux" }), new Category({ id: 4, name: "Hardware" }), new Category({ id: 5, name: "Software" }),];

  constructor() { }

  public getCategories(): Category[] {
    return this.categories;
  }
}

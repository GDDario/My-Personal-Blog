import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { mockCategories } from 'src/assets/mock/categories.mock';
import { Category } from '../models/category.model';
import api from 'src/assets/json/api.json';
import { CategoryInterface } from '../interfaces/category.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public categoriesSubject = new BehaviorSubject<Category[]>([]);

  constructor(private httpClient: HttpClient) { }

  public loadCategories(): void {
    let categories: Category[] = [];
    this.httpClient.get<CategoryInterface[]>(`${api.path}/category`).subscribe((response: CategoryInterface[]) => {
      for (let i = 0; i < response.length; i++) {
        categories.push(new Category({ id: response[i].id, name: response[i].name }));
      }
      this.categoriesSubject.next(categories);
    });
  }

  public selectCategory(id: number): void {
    this.categoriesSubject.subscribe((categories: Category[]) => {
      for (let i = 0; i < categories.length; i++) {
        if (categories[i].getId() == id) {
          categories[i].select();
        } else {
          categories[i].unselect();
        }
      }
    })

  }
}

import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/categorie.model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  public categories: Category[];

  constructor(private categoryService: CategoryService) { }

  public ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }

  public selectCategory(id: number): void {
    for(let i = 0; i < this.categories.length; i++) {
      if (this.categories[i].getId() == id) {
        console.log("Category " + this.categories[i].getId() + " selected");
        this.categories[i].select();
      } else {
        this.categories[i].unselect();
      }
    }
  }
}

import { Category } from "src/app/models/category.model";

export const mockCategories: Category[] = [
  new Category({ id: 1, name: "Open Source" }),
  new Category({ id: 2, name: "Free" }),
  new Category({ id: 3, name: "Linux" }),
  new Category({ id: 4, name: "Hardware" }),
  new Category({ id: 5, name: "Software" }),
];

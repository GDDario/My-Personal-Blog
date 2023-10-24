import { CategoryInterface } from "./category.interface";

export interface PostInterface {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  editDate?: string;
  imageId: string;
  category: CategoryInterface;
  urlParam: string;
}

import { Category } from "./categorie.model";

export class Post {
  private title: string;
  private description: string;
  private content: string;
  private date: Date;
  private editDate: Date;
  private imageId: string;
  private category: Category;

  constructor({ title, date, editDate, description, content, imageId, category }: {
    title?: string, date?: Date, editDate?: Date,
    description?: string, content?: string, imageId?: string, category?: Category
  }) {
    if (title != null) this.title = title;
    if (date != null) this.date = date;
    if (editDate != null) this.editDate = editDate;
    if (description != null) this.description = description;
    if (content != null) this.content = content;
    if (imageId != null) this.imageId = imageId;
    if (category != null) this.category = category;
  }

  public getTitle(): string {
    return this.title;
  }
  public setTitle(title: string): void {
    this.title = title;
  }

  public getDate(): Date {
    return this.date;
  }
  public setDate(date: Date): void {
    this.date = date;
  }

  public getEditDate(): Date {
    return this.editDate;
  }
  public setEditDate(editDate: Date): void {
    this.editDate = editDate;
  }

  public getDescription(): string {
    return this.description;
  }
  public setDescription(description: string): void {
    this.description = description;
  }

  public getContent(): string {
    return this.content;
  }
  public setContent(content: string): void {
    this.content = content;
  }

  public getImageId(): string {
    return this.imageId;
  }
  public setImageId(imageId: string): void {
    this.imageId = imageId;
  }

  public getCategory(): Category {
    return this.category;
  }
  public setCategory(category: Category): void {
    this.category = category;
  }

  public getFormatedDate(): string {
    return this.date.getMonth() + "/" + this.date.getDay() + "/" + this.date.getFullYear();
  }
}

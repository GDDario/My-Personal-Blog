import { Category } from "./category.model";

export class Post {
  private id: number = 0;
  private title: string;
  private description: string;
  private content: string;
  private date: Date;
  private editDate: Date;
  private imageId: string;
  private category: Category;
  private urlPath: string;

  constructor({ id, title, date, editDate, description, content, imageId, category, urlPath }: {
    id?: number, title?: string, date?: Date, editDate?: Date,
    description?: string, content?: string, imageId?: string, category?: Category, urlPath?: string
  }) {
    if (id != null) this.id = id;
    if (title != null) this.title = title;
    if (date != null) this.date = date;
    if (editDate != null) this.editDate = editDate;
    if (description != null) this.description = description;
    if (content != null) this.content = content;
    if (imageId != null) this.imageId = imageId;
    if (category != null) this.category = category;
    if (urlPath != null) this.urlPath = urlPath;
  }

  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
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

  public getUrlPath(): string {
    return this.urlPath;
  }
  public setUrlPath(urlPath: string): void {
    this.urlPath = urlPath;
  }

  public getFormatedDate(): string {
    return this.date.getMonth() + "/" + this.date.getDay() + "/" + this.date.getFullYear();
  }
}

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
  private urlParam: string;

  constructor({ id, title, dateString, editDateString, description, content, imageId, category, urlParam }: {
    id?: number, title?: string, dateString?: string, editDateString?: string,
    description?: string, content?: string, imageId?: string, category?: Category, urlParam?: string
  }) {

    if (id != null) this.id = id;
    if (title != null) this.title = title;
    if (dateString != null) {

      const dateParts = dateString.split(/[\s-:]/); // Split the string into an array of date and time parts

      // Construct a Date object from the parts (subtract 1 from month because months are 0-based in JavaScript)
      const date = new Date(
        parseInt(dateParts[0]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[2]),
        parseInt(dateParts[3]),
        parseInt(dateParts[4]),
        parseInt(dateParts[5])
      );

      this.date = date;
    }
    if (editDateString != null) {
      const dateParts = editDateString.split(/[\s-:]/); // Split the string into an array of date and time parts

      // Construct a Date object from the parts (subtract 1 from month because months are 0-based in JavaScript)
      const date = new Date(
        parseInt(dateParts[0]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[2]),
        parseInt(dateParts[3]),
        parseInt(dateParts[4]),
        parseInt(dateParts[5])
      );

      this.editDate = date;
    };
    if (description != null) this.description = description;
    if (content != null) this.content = content;
    if (imageId != null) this.imageId = imageId;
    if (category != null) this.category = category;
    if (urlParam != null) this.urlParam = urlParam;
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

  public getUrlParam(): string {
    return this.urlParam;
  }
  public setUrlParam(urlParam: string): void {
    this.urlParam = urlParam;
  }

  public getFormatedDate(): string {
    return this.date.getMonth() + "/" + this.date.getDay() + "/" + this.date.getFullYear();
  }
}

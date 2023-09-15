import { Author } from "./author.model";

export class Post {
  private title: string;
  private description: string;
  private content: string;
  private date: Date;
  private editDate: Date;
  private author: Author;
  private imageId: string;

  constructor({ title, date, editDate, author, description, content, imageId }: {
    title?: string, date?: Date, editDate?: Date, author?: Author,
    description?: string, content?: string, imageId?: string
  }) {
    if (title != null) this.title = title;
    if (date != null) this.date = date;
    if (editDate != null) this.editDate = editDate;
    if (author != null) this.author = author;
    if (description != null) this.description = description;
    if (content != null) this.content = content;
    if (imageId != null) this.imageId = imageId;
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

  public getAuthor(): Author {
    return this.author;
  }
  public setAuthor(author: Author): void {
    this.author = author;
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

  public getFormatedDate(): string {
    return this.date.getMonth() + "/" + this.date.getDay() + "/" + this.date.getFullYear();
  }
}

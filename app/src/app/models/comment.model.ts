import { User } from "./user.model";

export class Comment {
  private id: number;
  private user: User;
  private likes: number;
  private content: string;
  private date: Date;
  private editedDate?: Date;
  private isLiked?: boolean;

  constructor({id, user, likes, content, date, editedDate, isLiked }: {id?: number, user?: User, likes?: number, content?: string, date?: Date, editedDate?: Date, isLiked?: boolean}) {
    if (id != null) this.id = id;
    if (user != null) this.user = user;
    if (likes != null) this.likes = likes;
    if (content != null) this.content = content;
    if (date != null) this.date = date;
    if (editedDate != null) this.editedDate = editedDate;
    if (isLiked != null) this.isLiked = isLiked;
  }

  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }

  public getUser(): User {
    return this.user;
  }
  public setUser(user: User): void {
    this.user = user;
  }

  public getLikes(): number {
    return this.likes;
  }
  public setLikes(likes: number): void {
    this.likes = likes;
  }
  public addLike(): void {
    this.likes = this.likes + 1;
  }
  public removeLike(): void {
    this.likes = this.likes - 1;
  }

  public getContent(): string {
    return this.content;
  }
  public setContent(content: string): void {
    this.content = content;
  }

  public getDate(): Date {
    return this.date;
  }
  public setDate(date: Date): void {
    this.date = date;
  }

  public getEditedDate(): Date {
    return this.editedDate;
  }
  public setEditedDate(editedDate: Date): void {
    this.editedDate = editedDate;
  }

  public getIsLiked(): boolean {
    return this.isLiked;
  }
  public setIsLiked(isLiked: boolean): void {
    this.isLiked = isLiked;
  }
}

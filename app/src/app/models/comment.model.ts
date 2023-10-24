import { User } from "./user.model";

export class Comment {
  private id: number;
  private user: User;
  private likes: number;
  private content: string;
  private date: Date;
  private editedDate?: Date;
  private relatedCommentId: number;
  private answers?: Comment[];

  constructor({id, user, likes, content, date, editedDate, answers, relatedCommentId }: {id?: number, user?: User, likes?: number, content?: string, date?: Date, editedDate?: Date, relatedCommentId?: number, answers?: Comment[]}) {
    if (id != null) this.id = id;
    if (user != null) this.user = user;
    if (likes != null) this.likes = likes;
    if (content != null) this.content = content;
    if (date != null) this.date = date;
    if (editedDate != null) this.editedDate = editedDate;
    if (relatedCommentId != null) this.relatedCommentId = relatedCommentId;
    if (answers != null) this.answers = answers;
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

  public getRelatedCommentId(): number {
    return this.relatedCommentId;
  }
  public SetRelatedCommentId(relatedCommentId: number): void {
    this.relatedCommentId = relatedCommentId;
  }

  public getAnswers(): Comment[] {
    return this.answers;
  }
  public setAnswers(answers: Comment[]): void {
    this.answers = answers;
  }
}

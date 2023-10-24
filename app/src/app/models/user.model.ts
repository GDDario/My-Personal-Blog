export class User {
  private id: number;
  private username: string;
  private email: string;
  private about: string;
  private picture: string;
  private favoriteTopics: string[];
  private registerDate: Date;
  private postsRead: number;
  private commentsMade: number;

  constructor({ id, username, email, about, picture, favoriteTopics, registerDate, postsRead, commentsMade }: { id?: number, username?: string, email?: string, about?: string, picture?: string, favoriteTopics?: string[], registerDate?: Date, postsRead?: number, commentsMade?: number }) {
    if (id != null) this.id = id;
    if (username != null) this.username = username;
    if (email != null) this.email = email;
    if (about != null) this.about = about;
    if (picture != null) this.picture = picture;
    if (favoriteTopics != null) this.favoriteTopics = favoriteTopics;
    if (registerDate != null) this.registerDate = registerDate;
    if (postsRead != null) this.postsRead = postsRead;
    if (commentsMade != null) this.commentsMade = commentsMade;
  }

  public getId(): number {
    return this.id;
  }
  public setId(id: number): void {
    this.id = id;
  }

  public getUsername(): string {
    return this.username;
  }
  public setUsername(username: string): void {
    this.username = username;
  }

  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }

  public getFavoriteTopics(): string[] {
    return this.favoriteTopics;
  }
  public setFavoriteTopics(favoriteTopics: string[]): void {
    this.favoriteTopics = favoriteTopics;
  }

  public getAbout(): string {
    return this.about;
  }
  public setAbout(about: string): void {
    this.about = about;
  }

  public getPicture(): string {
    return this.picture;
  }
  public setPicture(picture: string): void {
    this.picture = picture;
  }

  public getRegisterDate(): Date {
    return this.registerDate;
  }
  public setRegisterDate(registerDate: Date): void {
    this.registerDate = registerDate;
  }

  public getCommentsMade(): number {
    return this.commentsMade;
  }
  public setCommentsMade(commentsMade: number): void {
    this.commentsMade = commentsMade;
  }

  public getPostsRead(): number {
    return this.postsRead;
  }
  public setPostsRead(postsRead: number): void {
    this.postsRead = postsRead;
  }
}

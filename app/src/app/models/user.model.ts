export class User {
  private id: number;
  private username: string;
  private fullName: string;
  private email: string;
  private registerDate: Date;
  private postsRead: number;
  private commentsMade: number;

  constructor({ id, username, fullName, email, registerDate, postsRead, commentsMade,  }: { id?: number, username?: string, fullName?: string, email?: string, registerDate?: Date, postsRead?: number, commentsMade?: number }) {
    if (id != null) this.id = id;
    if (username != null) this.username = username;
    if (fullName != null) this.fullName = fullName;
    if (email != null) this.email = email;
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

  public getFullName(): string {
    return this.fullName;
  }
  public setFullName(fullName: string) {
    this.fullName = fullName;
  }

  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
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

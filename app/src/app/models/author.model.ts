export class Author {
  private id: number;
  private name: string;
  private postsWritten: number;
  private contactEmail: string;

  constructor({id, name, postsWritten, contactEmail}: {id?: number, name?: string, postsWritten?: number, contactEmail?: string}) {
    if (id != null) this.id = id;
    if (name != null) this.name = name;
    if (postsWritten != null) this.postsWritten = postsWritten;
    if (contactEmail != null) this.contactEmail = contactEmail;
   }

   public getId(): number {
    return this.id;
   }
   public setId(id: number): void {
    this.id = id;
   }

   public getName(): string {
    return this.name;
   }
   public setName(name: string) {
    this.name = name;
   }

   public getPostsWritten(): number {
    return this.postsWritten;
   }
   public setPostsWritten(postsWritten: number) {
    this.postsWritten = postsWritten;
   }

   public setContactEmail(contactEmail: string) {
    this.contactEmail = contactEmail;
   }
   public getContactEmail(): string {
    return this.contactEmail;
   }
}

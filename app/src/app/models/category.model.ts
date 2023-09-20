export class Category {
  private id: number;
  private name: string;
  // Front-end only
  private isSelected: boolean = false;

  constructor({id, name}: {id?: number, name?: string}) {
    if (id != null) this.id = id;
    if (name != null) this.name = name;
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
  public setName(name: string): void {
    this.name = name;
  }

  public getIsSelected(): boolean {
    return this.isSelected;
  }
  public select(): void {
    this.isSelected = true;
  }
  public unselect(): void {
    this.isSelected = false;
  }
}

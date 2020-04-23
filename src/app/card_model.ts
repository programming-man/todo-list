export class CardModel {
  public content: string = "test model"
  public color: string

  constructor(content: string, color: string) {
    this.content = content
    this.color = color
  }
}

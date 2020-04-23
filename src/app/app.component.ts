import { Component } from '@angular/core';
import { CardModel } from './card_model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Minhas Tarefas';

  public card: any; // newModel
  public model: CardModel // model
  public modelContent: string
  public modelColor: string

  constructor() { }

  ngOnInit(){
  }

  public emitContent(content: string): any { // @Output
    this.card = new CardModel(content, "#3f51b5")
    this.model = this.card

    this.modelContent = this.model.content
    this.modelColor = this.model.color

    console.log("CONTEUDO", this.model.content)
  }
}

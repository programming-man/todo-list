import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  // tasks: any[] = [{
  //   usuario: "email@email.com.br",
  //   cartoes: [
  //     {
  //       conteudo: "Preparar a aula",
  //       cor: "rgb(118, 239, 64)"
  //     },
  //     {
  //       conteudo: "Preparar a avaliação",
  //       cor: "rgb(118, 239, 64)"
  //     }
  //   ]
  // }]

  @Input() content: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

}

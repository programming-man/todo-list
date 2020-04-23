import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})

export class CardsContainerComponent implements OnInit {
  @Input() public cardContent: string;
  @Input() public cardColor: string;

  constructor() { }

  ngOnInit(): void {

  }

  clickTest(event) {
    console.log(this.cardContent)
    console.log(this.cardColor)
  }

}

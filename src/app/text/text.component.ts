import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {

  contentInput: any;
  task:any
  constructor(private _link: BroadcastService) { }

  ngOnInit(): void {
  }

  saveValue(event) {
    let cont = event.target.value
    this.contentInput = cont
  }
  
  getContent(event) {
    this._link.sendNewTodo(this.contentInput)
    console.log('Entrou no keyUp' + this.contentInput);
    this.task = ''
  }

  getClickContent(event) {
    this._link.sendNewTodo(this.contentInput)
    console.log('Entrou no click' + this.contentInput);
    this.task = ''
  }
}
import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})

export class TextComponent implements OnInit {

  @Output() emitContent = new EventEmitter<string> ();

  contentInput: string;

  constructor() { }

  ngOnInit(): void {
  }

  getContent(event: any) {
    event.preventDefault();
    this.contentInput = event.target.value;
    this.emitContent.emit(this.contentInput);
  }

  getContentClick(event: any) {
    event.preventDefault();
    this.emitContent.emit(this.contentInput);
  }

}

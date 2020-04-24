import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../broadcast.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  constructor(private _link: BroadcastService) { }

  todoList: string[] = []
  ngOnInit(): void {
    this.adicionar()
  }

  adicionar() {
    this._link.broadcastNewTodo.subscribe((result) => {
      this.todoList.push(result)
      console.log(result)
    })
  }

  deletar(todo) {
    for (let i = 0; i < this.todoList.length; i++) {
      if (todo == this.todoList[i]) {
        this.todoList.splice(i, 1)
      }

    }
  }

  edit(todo) {
    let edit = prompt("Editando a terafa.....")
    for (let i = 0; i < this.todoList.length; i++) {
      if (todo == this.todoList[i]) {
        this.todoList.splice(i, 1, edit)
      }
    }
  }
}

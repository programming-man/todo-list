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

  adicionar(){
    this._link.broadcastNewTodo.subscribe((result) => {
      this.todoList.push(result)
      console.log(result)
    })
  }

  deletar(event){
    console.log(event.target.id )
    let index = this.todoList.indexOf(event.target.id);
    this.todoList.splice(index);
  }

}

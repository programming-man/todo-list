import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  broadcastNewTodo = new EventEmitter<string>();

  constructor() { }

  sendNewTodo(todo: string) {
    this.broadcastNewTodo.emit(todo);
  }

}

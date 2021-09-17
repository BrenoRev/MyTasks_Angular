import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: String = "Minhas tarefas";

  constructor() {
    this.todos.push(new Todo(1,"Passear com o cachorro", false));
    this.todos.push(new Todo(2,"Ir ao Supermercado", false));
    this.todos.push(new Todo(3,"Cortar o cabelo", false));
    this.todos.push(new Todo(4,new Date().toDateString(), false));
    this.todos.push(new Todo(5,"Ir a Academia", true));
  }

  alterarTexto(): void {
    this.title = "Texto Alterado";
  }
}

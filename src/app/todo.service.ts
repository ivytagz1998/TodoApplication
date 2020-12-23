import { Injectable } from '@angular/core';
import { Init } from './init-todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends Init {

  constructor() {
    super();
    console.log('Todo service works');
    this.load();
  }

  getTodos(){
    let todos = JSON.parse(localStorage.getItem('todos')||'{}');
    return todos;
  }
  
  addTodo(newTodo:any) {
    let todos = JSON.parse(localStorage.getItem('todos')||'{}');
    // Add New Todo in the array
    todos.push(newTodo);
    // Set New Todos
    localStorage.setItem('todos', JSON.stringify(todos));
 }

 deleteTodo(id:any) {
  let todos = JSON.parse(localStorage.getItem('todos')||'{}');
  
  for(let i = 0; i < todos.length; i++){
    if(todos[i].id === id){
       todos.splice(i, 1);
    }
  }
   // Set New Todos
   localStorage.setItem('todos', JSON.stringify(todos));
  }

  updateTodo(id:any,newText:any) {
    let todos = JSON.parse(localStorage.getItem('todos')||'{}');
    for(let i = 0; i < todos.length; i++){
      if(todos[i].id === id){
         todos[i].text=newText;
      }
    }
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  CompletedTodo(id:any){ 
    let todos = JSON.parse(localStorage.getItem('todos')||'{}');
    for(let i = 0; i < todos.length; i++){
      if(todos[i].id === id){
        todos[i].status = true
      }
    }
    localStorage.setItem('todos',JSON.stringify(todos))
  }
}

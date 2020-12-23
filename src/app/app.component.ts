import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ToDoApp';
  todos:any;
  text:any;
  oldText:any;
  id:any;
  status = false;
  state = 'default';
  activeTodo:any=[];
  completedTodo:any=[];
  dateCreated:any;

  constructor(private todoService : TodoService){ };

  ngOnInit(){
    this.getActiveTodos();
    this.getCompletedTodos();
    // this.todos = this.todoService.getTodos();
  }

  getActiveTodos(){
    let todos = this.todoService.getTodos();
    for(let i=0; i<todos.length; i++){
      if(todos[i].status === false){
        this.activeTodo.push(todos[i]);
      }
      // else{
      //   this.completedTodo.push(todos[i]);
      // }
    }
  }

  getCompletedTodos(){
    let todos = this.todoService.getTodos();
    console.log(todos);
    for(let i=0; i<todos.length; i++){
      if(todos[i].status === true){
        this.completedTodo.push(todos[i]);
      }
      // else{
      //   this.completedTodo.push(todos[i]);
      // }
    }
  }

  addTodo() {
    var d = new Date();
    var dateString = (d.getMonth()+1)+ "-" + d.getDate()  +"-"+ d.getFullYear();
    var id = Date.now().toString(36) + Math.random().toString(36).substr(2)
    let newTodo = {
      id: id,
      text: this.text,
      status: false,
      dateCreated: dateString
    }
    this.activeTodo.push(newTodo);
    this.todoService.addTodo(newTodo);
    this.text='';
  }

  deleteTodo(id:any, x:any) {
    this.activeTodo.splice(x, 1);
    this.todoService.deleteTodo(id);
  }

  editTodo(id:any,todo:any){
    this.state = 'edit';
    this.oldText = todo;
    this.text = todo;
    this.id=id;
  }

  updateTodo(){
    this.todoService.updateTodo(this.id, this.text);
    this.activeTodo=this.todoService.getTodos();
  }
  
  CompletedTodo(id:any, x:any){
    this.todoService.CompletedTodo(id);
    this.activeTodo.splice(x, 1);

    let todos = this.todoService.getTodos();
    for(let i=0; i<todos.length; i++){
      if(todos[i].id === id){
        this.completedTodo.push(todos[i]);
      }
    }
  }
}

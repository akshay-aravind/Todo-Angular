import { ExpressionStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';

export interface TodoData {
  id: number;
  todo: string;
  description: string;
  status: 'OPEN' | 'CLOSED';
  startDate: string;
  endDate: string;
}

export interface User {
  email: string;
  name: string;
}
// export interface LoginResponse {
//   user: User | null;
//   message: string;
// }

// export interface Feedbacks {
//   feedback: string;
// }

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}
  private UserData: User | null = null;
  private ToDos: TodoData[] = [];
  private feedback: string | null = null;

  signup(data: User) {
    this.UserData = data;
  }

  sendFeed(data: string) {
    this.feedback = data;
  }

  getfeed() {
    return this.feedback;
  }

  getUser() {
    return this.UserData;
  }

  deletefeed() {
    this.feedback = null;
  }

  logout() {
    this.UserData = null;
  }

  // login(data: User): LoginResponse {
  //   const user = this.UserData.find((user) => data.email == user.email);
  //   if (!user) {
  //     return { message: 'User does not exist', user: null };
  //   }
  //   return { message: 'Login Succesfully', user };
  // }

  addTodo(todo: TodoData) {
    console.log(this.ToDos);
    this.ToDos.push({
      ...todo,
      id: this.ToDos.length + 1,
    });
  }

  updateTodo(id: number, todo: any) {
    this.ToDos = this.ToDos.map((data) => (data.id == id ? todo : data));
  }

  deleteTodo(todoId: number) {
    this.ToDos = this.ToDos.filter((todo) => todo.id !== todoId);
  }

  getTodo(id: number) {
    return this.ToDos.find((todo) => id == todo.id);
  }

  getTodos() {
    return this.ToDos;
  }
}

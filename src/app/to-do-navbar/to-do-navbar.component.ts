import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-to-do-navbar',
  templateUrl: './to-do-navbar.component.html',
  styleUrls: ['./to-do-navbar.component.scss'],
})
export class ToDoNavbarComponent {
  constructor(private todoService: TodoService) {}
  user = this.todoService.getUser();
  logout() {
    this.todoService.logout();
  }
}

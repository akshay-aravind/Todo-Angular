import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoData, TodoService } from '../todo.service';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-to-do-table',
  templateUrl: './to-do-table.component.html',
  styleUrls: ['./to-do-table.component.scss'],
})
export class ToDoTableComponent implements AfterViewInit {
  constructor(private router: Router, private todoService: TodoService) {}

  todos = this.todoService.getTodos();
  displayedColumns: string[] = [
    'TO-DO',
    'DESCRIPTION',
    'START DATE',
    'END DATE',
    'STATUS',
    'EDIT/DELETE',
  ];
  dataSource = new MatTableDataSource(this.todos);
  @ViewChild(MatPaginator) paginator: any = MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  deleteTodo(id: number) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.todoService.deleteTodo(id);
      this.todos = this.todos.filter((todo) => todo.id !== id);
      console.log(id);
      this.dataSource = new MatTableDataSource(this.todos);
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

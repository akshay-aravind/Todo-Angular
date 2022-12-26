import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoData, TodoService } from '../todo.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-update',
  templateUrl: './to-do-update.component.html',
  styleUrls: ['./to-do-update.component.scss']
})
export class ToDoUpdateComponent implements OnInit{
  constructor(private todoService : TodoService, private router : Router,  private route: ActivatedRoute){}

  toDoForm : any
  id : number | undefined

  ngOnInit(){
    this.id = this.route.snapshot.paramMap.get('id') as unknown as number;
   
    const toDo = this.todoService.getTodo(this.id)
   
    console.log(toDo,'hhhhhhhhhhhhhhhhhhhhh');
    
    this.toDoForm = new FormGroup({
      todo: new FormControl(toDo?.todo, [Validators.required]),
      description: new FormControl(toDo?.description, [Validators.required]),
      status: new FormControl(toDo?.status, [Validators.required]),
      startDate: new FormControl(toDo?.startDate, [Validators.required]),
      endDate: new FormControl(toDo?.endDate, [Validators.required]),
    });
  }

  goBack() {
    this.router.navigate(['./table'])
  }
  update(){
   const updated = {
    ...this.toDoForm.value,
      id: this.id
   }
   this.todoService.updateTodo(this.id as number , updated as TodoData )
   this.router.navigate(['/table'])
  }
}

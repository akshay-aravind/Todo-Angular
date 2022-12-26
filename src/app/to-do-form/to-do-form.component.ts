import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoData, TodoService } from '../todo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.scss'],
})
export class ToDoFormComponent implements OnInit{
  private routeSub: any = Subscription;
 
  constructor(
    private router: Router,
    private todoService: TodoService,
    private route: ActivatedRoute
  ) {}

  

  ngOnInit() {
    this.routeSub = this.route.params.subscribe((params) => {
      params['id'] * 1
      console.log(params);
      console.log(params['id']);
      console.log(typeof(params['id']*1));
      
    });

    const toDo = this.todoService.getTodo(this.routeSub)
    
    
    // if(this.routeSub) {s
    //     this.toDoForm = new FormGroup({
    //     todo: new FormControl(toDo?.todo, [Validators.required]),
    //     description: new FormControl(toDo?.description, [Validators.required]),
    //     status: new FormControl('', [Validators.required]),
    //     startDate: new FormControl('', [Validators.required]),
    //     endDate: new FormControl('', [Validators.required]),
    //   });
    // }
    // else {
    //     this.toDoForm = new FormGroup({
    //     todo: new FormControl('', [Validators.required]),
    //     description: new FormControl('', [Validators.required]),
    //     status: new FormControl('', [Validators.required]),
    //     startDate: new FormControl('', [Validators.required]),
    //     endDate: new FormControl('', [Validators.required]),
    //   });
    // }
  }

  toDoForm = new FormGroup({
    todo: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
  });

  goBack(){
  this.router.navigate(['./table'])
  }

  navigate() {
    const Todos = {
      ...this.toDoForm.value,
    };
    console.log(Todos);

    this.todoService.addTodo(Todos as TodoData);
    this.router.navigate(['/table']);
    console.log(this.toDoForm);
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

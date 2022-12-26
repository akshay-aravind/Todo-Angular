import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private toDoService: TodoService, private router: Router) {}

  logData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required]),
  });
  getErrorMessage() {
    if (this.logData.hasError('required')) {
      return 'You must enter a value';
    }

    return this.logData.hasError('email') ? 'Not a valid email' : '';
  }

  submit() {
    const userData = {
      email: this.logData.get('email')?.value as string,
      name: this.logData.get('name')?.value as string,
    };
    console.log(userData);

    this.toDoService.signup(userData);
    this.router.navigate(['/table']);
  }
}

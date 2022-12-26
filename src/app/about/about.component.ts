import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  feedback = '';
  ngOnInit(): void {
    const getback = this.todoService.getfeed();
    this.feedback = getback === null ? '' : getback;
  }
  constructor(private todoService: TodoService, private router: Router) {}
  user = this.todoService.getUser();
  feed = new FormControl('', [Validators.required]);

  submit() {
    this.feedback = this.feed.value as string;
    this.todoService.sendFeed(this.feedback) as unknown as string;
  }
  delete() {
    if (window.confirm('Are you sure you want to delete?')) {
      const newfeed = this.todoService.deletefeed() as unknown as string;
      this.feedback = newfeed;
      this.router.navigate(['./about']);
    }
  }
}

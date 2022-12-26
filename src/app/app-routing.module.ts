import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { ToDoTableComponent } from './to-do-table/to-do-table.component';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { HomeComponent } from './home/home.component';
import { ToDoUpdateComponent } from './to-do-update/to-do-update.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { PermissionGuard } from './permission.guard';

const routes: Routes = [
  {
    path: 'table',
    component: ToDoTableComponent,
    canActivate: [PermissionGuard],
  },
  {
    path: 'form',
    component: ToDoFormComponent,
    canActivate: [PermissionGuard],
  },
  { path: 'update/:id', component: ToDoUpdateComponent },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [PermissionGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

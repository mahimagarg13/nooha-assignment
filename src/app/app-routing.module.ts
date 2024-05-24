// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TemplatesListComponent } from './templates-list/templates-list.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'templates', component: TemplatesListComponent },
  { path: 'create-template', component: CreateTemplateComponent },
  { path: 'edit-template', component: EditTemplateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route redirects to login
  { path: '**', redirectTo: '/login' } // Handle other routes by redirecting to login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

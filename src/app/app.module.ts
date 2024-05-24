import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HeaderComponent } from './header/header.component';
import { TemplatesListComponent } from './templates-list/templates-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    TemplatesListComponent,
    SideNavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatStepperModule,
    AppRoutingModule,
    MatInputModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatFormFieldModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

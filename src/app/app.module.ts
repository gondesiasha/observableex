import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
//import { Observable } from '@angular'
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [StudentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

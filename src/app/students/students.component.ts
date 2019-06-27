import { Component, OnInit } from '@angular/core';
import { UrlHandlingStrategy } from '@angular/router';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  constructor(private studentservice:StudentService) { }
  students=[];

  ngOnInit() {
   // this.students=this.studentservice.getstudents();
   this.studentservice.getstudents().subscribe(data1 =>this.students=data1);

  }

}

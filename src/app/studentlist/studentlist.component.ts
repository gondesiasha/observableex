import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.scss']
})
export class StudentlistComponent implements OnInit {

  constructor(private studentservice:StudentService ) { }
  students=[];
    
  ngOnInit() {

    //this.students=this.studentservice.getstudents();
     this.studentservice.getstudents().subscribe(data1 =>this.students=data1);


  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { student } from './student';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private data:string ="/assets/data/students.json";

  constructor(private http:HttpClient) { }
  getstudents(): Observable<student[]>
  { 
     return this.http.get<student[]> (this.data);
  }
}



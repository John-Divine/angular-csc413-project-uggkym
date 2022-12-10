import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { STUDENTS} from '../mock-students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students =STUDENTS;
  selectedStudent?: Student;
  onSelect(student:Student): void {
  this.selectedStudent = student;
}

  constructor() { }

  ngOnInit() {
  }

}
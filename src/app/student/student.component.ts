import { Component, OnInit } from '@angular/core';
import {Student} from '../student';
import { STUDENTS} from '../mock-students';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students:Student[]=[];
  selectedStudent?: Student;
  onSelect(student:Student): void {
  this.selectedStudent = student;
}

  constructor(private studentService: StudentService) {}
  getStudents(): void {
    this.students = this.studentService.getStudents();
  }

  ngOnInit():void{
    this.getStudents()
  }

}
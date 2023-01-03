import { Course } from './../../common/models/course';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() courses: Course[];
  @Output() selectedCourse = new EventEmitter();
  @Output() CourseId = new EventEmitter();

  selectCourse(course: Course): void{
    this.selectedCourse.emit(course);
  }

  deleteCourse(courseId): void{
    this.CourseId.emit(courseId);
  }

}

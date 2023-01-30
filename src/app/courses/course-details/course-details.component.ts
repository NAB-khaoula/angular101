import { Course } from '../../common/interfaces/course.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent  {
  currentCourse: Course;
  originalTitle: string = '';
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set course(value) {
    if (!value) return
    this.currentCourse = { ...value }
    this.originalTitle = this.currentCourse.title;
  }

}

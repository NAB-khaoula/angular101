import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() selectedCourse;
  @Output() savedCourse = new EventEmitter();
  @Output() resetedCourse = new EventEmitter(false);

  saveCourse(selectedCourse) {
    this.savedCourse.emit(selectedCourse);
  }
  reset() {
    this.resetedCourse.emit(true);
  }
}

import { LessonsService } from './../common/services/lessons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$
  courseLessons = []

  selectedCourseLesson: any = null;
  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.courseLessons = this.lessonsService.courseLessons;
    this.lessons$ = this.lessonsService.lessons$
  }

  selectCourseLesson(courseLesson: any){
    this.selectedCourseLesson = courseLesson;
  }
}

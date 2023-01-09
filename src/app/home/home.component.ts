import { LessonsService } from './../common/services/lessons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$
  selectedCourseLesson: any = null;
  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.fetchLessons();
  }

  selectCourseLesson(courseLesson: any){
    this.selectedCourseLesson = courseLesson;
  }
  fetchLessons() {
    this.lessons$ = this.lessonsService.all()

    console.log('jbna lessons b3da', this.lessons$);
  }
}

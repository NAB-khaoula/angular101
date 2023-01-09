import { Lesson } from './../common/models/lessons';
import { Observable } from 'rxjs';
import { LessonsService } from './../common/services/lessons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons$: Observable<Lesson[]>
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
  }
}

import { AuthService } from './../common/services/auth/auth.service';
import { Lesson } from '../common/interfaces/lessons.interface';
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
  isAuthenticated: any;
  constructor(private lessonsService: LessonsService, private authService: AuthService) {
  }

  ngOnInit() {
    this.fetchLessons();
    this.isAuthenticated = this.authService.getIsAuthenticated();
  }

  selectCourseLesson(courseLesson: any){
    this.selectedCourseLesson = courseLesson;
  }
  fetchLessons() {
    this.lessons$ = this.lessonsService.all()
  }
}

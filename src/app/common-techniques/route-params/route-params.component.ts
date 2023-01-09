import { LessonsService } from './../../common/services/lessons.service';
import { Lesson } from './../../common/models/lessons';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-params',
  templateUrl: './route-params.component.html',
  styleUrls: ['./route-params.component.scss'],
})
export class RouteParamsComponent implements OnInit {
  lessons$: Observable<Lesson[]>
  currentLesson: Lesson;
  currentId: String;
  constructor(private lessonsService: LessonsService,private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.fetchLessons();
    this.route.paramMap.subscribe(params => {
      this.currentId = params.get('id');
      if (this.currentId) {
        this.lessons$.subscribe(lesson => this.currentLesson =  lesson.find(lesson => lesson.id == this.currentId))
      }
    })
  }

  fetchLessons() {
    this.lessons$ = this.lessonsService.all();
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  //render courses in a list
  // select a course
  // render selected course

  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'JavaScript The HARDEST PARTS EVER!',
      description: 'Learn the JavaScript like a pro! with will',
      percentComplete: 26,
      favorite: true,
    },
  ];

  selectedCourse = null;

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course: any) {
    this.selectedCourse = course;
  }
}

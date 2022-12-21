import { Component, OnInit } from '@angular/core';
import { Course } from '../common/models/course';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false
}


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  //render courses in a list
  // select a course
  // render selected course

  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 46,
      favorite: true,
    },
    {
      id: '2',
      title: 'JavaScript The HARDEST PARTS EVER!',
      description: 'Learn the JavaScript like a pro! with will',
      percentComplete: 70,
      favorite: true,
    },
    {
      id: '3',
      title: 'How to be a better Entrepreneur!',
      description:
        'The best NOT shortcut to be a good entrepreneur in a small market',
      percentComplete: 10,
      favorite: false,
    },
  ];

  selectedCourse: Course = emptyCourse;
  originalTitle: String = '';

  constructor() {}

  ngOnInit(): void {}

  selectCourse(course: Course) {
    this.selectedCourse = { ...course };
    this.originalTitle = course.title
  }
  deleteCourse(courseId: string) {
    if (this.selectedCourse && this.selectedCourse.id === courseId)
      this.selectCourse({ ...emptyCourse });
  }
  reset() {
    this.selectCourse({ ...emptyCourse });
  }

  saveCourse(selectedCourse) {
    console.log('SAVE COURSE', selectedCourse)
  }
}

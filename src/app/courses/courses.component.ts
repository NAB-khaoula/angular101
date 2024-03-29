import { CoursesService } from '../common/services/courses.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../common/interfaces/course.interface';
import { Observable } from 'rxjs';

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
  greeting: string = 'here is the parent';
  courses$: Observable<Course[]>;
  selectedCourse: Course = emptyCourse;


  constructor(private coursesService: CoursesService) {}

  greet1(event) {
    this.greeting = event;
  }
  ngOnInit(): void {
    // this.courses = this.coursesService.courses
    // this.coursesService.all().subscribe((result: any) => this.courses = result) ===> Delegation
    this.fetchCourses();
  }

  fetchCourses() {
    this.courses$ = this.coursesService.all();
  }

  selectCourse(course: Course) {
    this.selectedCourse = { ...course };
  }
  deleteCourse(courseId: string) {
    if (this.selectedCourse && this.selectedCourse.id === courseId)
      this.selectCourse({ ...emptyCourse });
  }
  reset() {
    this.selectCourse({ ...emptyCourse });
  }

  saveCourse(selectedCourse) {
    if (selectedCourse.id) {
      this.updateCourse(selectedCourse);
    }
    else {
      this.createCourse(selectedCourse)
    }
    console.log('SAVE COURSE', selectedCourse);
  }


  createCourse(course) {
    this.coursesService.create(course).subscribe(() => this.fetchCourses());
  }

  updateCourse(course) {
    this.coursesService.update(course).subscribe(() => this.fetchCourses())
  }
}

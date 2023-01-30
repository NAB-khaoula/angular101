import { HttpClient } from '@angular/common/http';
import { Course } from '../interfaces/course.interface';
import { Injectable } from '@angular/core';


const BASE_URL = "http://localhost:3000"

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient){}

  all()
  {
    return this.http.get<Course[]>(this.getUrl())
  }

  find(id) {
    return this.http.get(this.getUrlWithID(id));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlWithID(course.id), course);
  }

  delete(course) {
    return this.http.delete(this.getUrlWithID(course.id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}

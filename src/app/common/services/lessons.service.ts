import { Lesson } from './../models/lessons';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';

const BASE_URL: string = `http://localhost:3000`

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  lessons = 'lessons'

  constructor(private http: HttpClient){}

  private getUrl(){
    return `${BASE_URL}/${this.lessons}`
  }

  private getUrlWithId(id){
    return `${this.getUrl()}/${id}`
  }

  all() {
    return this.http.get<Lesson[]>(this.getUrl());
  }

  find(id: string){
    return this.http.get<Lesson>(this.getUrlWithId(id));
  }
}

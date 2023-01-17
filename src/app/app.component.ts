import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private subject = new BehaviorSubject(123);
  title = 'Angular 13 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];
  childRoute = {
    path: '/example/child',
    icon: 'announcement',
    title: 'Child Routes',
  };
  routeParams = {
    path: 'example/routeParams',
    icon: 'system_update_alt',
    title: 'Route Params',
  };
  protectedRoute = {
    path: 'example/protectedRoute',
    icon: 'vpn_key',
    title: 'Protected Routes',
  };
  constructor() { }
  // RxJS v6+


// two new subscribers will get initial value => output: 123, 123
subject.subscribe(console.log);
subject.subscribe(console.log);

// two subscribers will get new value => output: 456, 456
subject.next(456);

// new subscriber will get latest value (456) => output: 456
subject.subscribe(console.log);

// all three subscribers will get new value => output: 789, 789, 789
subject.next(789);

// output: 123, 123, 456, 456, 456, 789, 789, 789
}

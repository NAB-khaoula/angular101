import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
    title : 'Protected Routes'
  }
  constructor() {}
}

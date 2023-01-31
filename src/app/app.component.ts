import { UserInfo } from './common/interfaces/auth.interface';
import { AuthService } from './common/services/auth/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Component } from '@angular/core';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private subject = new BehaviorSubject(123);
  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));
  title = 'Angular 13 Fundamentals';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/courses', icon: 'view_list', title: 'Courses' },
  ];
  examples = [
    {
      path: '/example/child',
      icon: 'announcement',
      title: 'Child Routes',
    },
    {
      path: 'example/routeParams',
      icon: 'system_update_alt',
      title: 'Route Params',
    },
    {
      path: 'example/protectedRoute',
      icon: 'vpn_key',
      title: 'Protected Routes',
    },
    {
      path: 'example/lazyModule',
      icon: 'open_in_browser',
      title: 'Lazy Module',
    },
    {
      path: 'example/dynamic-components',
      icon: 'dynamic_feed',
      title: 'Dynamic Components',
    },
    {
      path: 'example/custom-input',
      icon: 'dashboard_customize',
      title: 'Custom Input',
    },
  ];
  test: UserInfo = {
    email: 'email',
    password: 'pass',
  };
  constructor(private authService: AuthService) {}

  // two new subscribers will get initial value => output: 123, 123
  something() {
    this.subject.subscribe(console.log);
    this.subject.subscribe(console.log);

    // two subscribers will get new value => output: 456, 456
    this.subject.next(456);

    // new subscriber will get latest value (456) => output: 456
    this.subject.subscribe(console.log);

    // all three subscribers will get new value => output: 789, 789, 789
    this.subject.next(789);
    console.log('subject', this.subject);
    // output: 123, 123, 456, 456, 456, 789, 789, 789
  }

  logout() {
    this.authService.logout();
  }
  login() {
    this.authService.login(this.test);
  }
}

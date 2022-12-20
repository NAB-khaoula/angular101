import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: `home`,
  templateUrl: `home.component.html`,
  styleUrls: [`home.component.scss`],
})
export class HomeComponent implements OnInit, OnChanges {
  ngOnInit(): void {
    console.log(`child: ngOnInit is fired`);
  }

  @Input() parentData: any;

  changeFromChild(): void {
    this.parentData -= 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`child: ngOnChange is fired`, changes);
  }
}

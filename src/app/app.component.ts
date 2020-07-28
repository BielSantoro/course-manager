import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-manager';

  // tslint:disable-next-line: no-inferrable-types
  name: string = 'Gabriel';
}

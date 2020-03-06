import { Component } from '@angular/core';
import { bio, contactInfo, education, jobHistory, links, projects, references, skills } from './content/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}

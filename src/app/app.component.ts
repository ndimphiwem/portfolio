import { Component } from '@angular/core';
import { bio, contactInfo, education, jobHistory, links, projects, references, skills, services } from './content/profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  bio = bio;
  contactInfo = contactInfo;
  links = links;
  projects = projects;
  references = references;
  skills = skills;
  services = services;
  title = 'portfolio';
}

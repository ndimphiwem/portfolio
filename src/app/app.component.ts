import { Component, OnInit } from '@angular/core';
import { bio, contactInfo, education, jobHistory, links, projects, references, skills, services } from './content/profile';
import { SeoService } from './utils/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  bio = bio;
  contactInfo = contactInfo;
  links = links;
  projects = projects;
  references = references;
  skills = skills;
  services = services;
  title = 'portfolio';

  constructor(readonly seo: SeoService) {}

  ngOnInit() {
    this.seo.setMetaTags([
      {
        name: 'keywords',
        content: 'ndimphiwe, mayekiso, ndimphiwe mayekiso, web developer, front end developer, ndimphiwe developer, developer mayekiso'
      },
      { name: 'title', content: 'Ndimphiwe Mayekiso - Web Developer' },
      { name: 'description', content: 'Ndimphiwe Mayekiso - Web, Front-end and UI/UX Developer based in Centurion, South Africa.' },
      { name: 'twitter:title', content: 'Ndimphiwe Mayekiso - Web Developer' },
      { name: 'twitter:text:title', content: 'Ndimphiwe Mayekiso - Web Developer' },
      { name: 'twitter:description', content: 'Ndimphiwe Mayekiso - Web, Front-end and UI/UX Developer based in Centurion, South Africa.' }
    ]);
    this.seo.setOgTags([
      { property: 'og:title', content: 'Ndimphiwe Mayekiso - Web Developer' }
    ]);
    this.seo.setTitle('Ndimphiwe Mayekiso - Web Developer');
  }
}

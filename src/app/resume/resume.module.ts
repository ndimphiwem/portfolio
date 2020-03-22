import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './bio/bio.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EmploymentHistoryComponent } from './employment-history/employment-history.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { LinksComponent } from './links/links.component';
import { ServicesComponent } from './services/services.component';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [
    BioComponent,
    ContactInfoComponent,
    EmploymentHistoryComponent,
    SkillsComponent,
    ReferencesComponent,
    ProjectsComponent,
    EducationComponent,
    LinksComponent,
    ServicesComponent
  ],
  imports: [CommonModule, UtilsModule],
  exports: [
    BioComponent,
    ContactInfoComponent,
    EmploymentHistoryComponent,
    SkillsComponent,
    ReferencesComponent,
    ProjectsComponent,
    EducationComponent,
    LinksComponent,
    ServicesComponent
  ]
})
export class ResumeModule {}

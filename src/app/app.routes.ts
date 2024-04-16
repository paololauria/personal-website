import { Routes } from '@angular/router';
import { EducationComponent } from './sections/education/education.component';
import { AboutComponent } from './sections/about/about.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { PortfolioComponent } from './sections/portfolio/portfolio.component';


export const routes: Routes = [
   { path: '', redirectTo: '/about', pathMatch: 'full'},
   { path: 'about', component: AboutComponent},
   { path: 'education', component: EducationComponent},
   { path: 'skills', component: SkillsComponent},
   { path: 'portfolio', component: PortfolioComponent}
];

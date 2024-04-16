import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{
  technologies: any[] = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    const projects = this.portfolioService.getProjects();
    const projectWithIdZero = projects.find(project => project.id === 0);
  
    if (projectWithIdZero) {
      this.technologies = projectWithIdZero.technologies;
    }
  }  
}

import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent implements OnInit {
  programmingLanguages: any[] = [];
  frameworks: any[] = [];
  tools: any[] = [];
  databases: any[] = [];
  ide: any[] = [];

  technologies: any[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    const projects = this.portfolioService.getProjects();
    const projectWithIdZero = projects.find((project) => project.id === 0);

    if (projectWithIdZero) {
      this.programmingLanguages = projectWithIdZero.technologies.filter(
        (tech: { category: string }) => tech.category === 'programming'
      );
      this.frameworks = projectWithIdZero.technologies.filter(
        (tech: { category: string }) => tech.category === 'framework'
      );
      this.tools = projectWithIdZero.technologies.filter(
        (tech: { category: string }) => tech.category === 'tool'
      );
      this.databases = projectWithIdZero.technologies.filter(
        (tech: { category: string }) => tech.category === 'database'
      );
      this.ide = projectWithIdZero.technologies.filter(
        (tech: { category: string }) => tech.category === 'ide'
      );
    }
  }
}

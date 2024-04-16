import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private projects: any[] = [
    { 
      id: 0, 
      title: 'Skills', 
      subtitle: '',
      description: '',
      imageUrl: '',
      projectUrl: '',
      githubUrl1: '',
      githubUrl2: '',
      technologies: [
        { name: 'Java', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png', url: 'URL_CLICCABILE_JAVA' },
        { name: 'JavaScript', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png', url: 'URL_CLICCABILE_JAVASCRIPT' },
        { name: 'TypeScript', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png', url: 'URL_CLICCABILE_TYPESCRIPT' },
        { name: 'HTML', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png', url: 'URL_CLICCABILE_HTML' },
        { name: 'CSS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png', url: 'URL_CLICCABILE_CSS' },
        { name: 'Angular', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', url: 'URL_CLICCABILE_ANGULAR' },
        { name: 'Spring', imageUrl: 'https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png', url: 'URL_CLICCABILE_TYPESCRIPT' },
        { name: 'Bootstrap', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/bootstrap-7-1175254.png', url: 'URL_CLICCABILE_BOOTSTRAP' },
        { name: 'Node.js', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png', url: 'URL_CLICCABILE_NODE_JS' },
        { name: 'Docker', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png', url: 'URL_CLICCABILE_DOCKER' },
        { name: 'SQL', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png', url: 'URL_CLICCABILE_SQL' },
        { name: 'Postman', imageUrl: 'https://www.svgrepo.com/show/354202/postman-icon.svg', url: 'URL_CLICCABILE_POSTMAN' },
        { name: 'Git', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/git-225996.png', url: 'URL_CLICCABILE_GIT' },
        { name: 'GitHub', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png', url: 'URL_CLICCABILE_GITHUB' },
        { name: 'PostgreSQL', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-226047.png', url: 'URL_CLICCABILE_POSTGRESQL' },
        { name: 'IntelliJ IDEA', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/intellij-idea-569199.png', url: 'URL_CLICCABILE_INTELLIJ_IDEA' },
        { name: 'Visual Studio Code', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/visual-studio-code-1868941-1583105.png', url: 'URL_CLICCABILE_VISUAL_STUDIO_CODE' }
      ]
    },
    { 
      id: 1, 
      title: 'Bed & Breakfast', 
      subtitle: 'Prenota il tuo soggiorno perfetto',
      description: "Il nostro progetto di Bed & Breakfast offre un'esperienza di soggiorno unica e confortevole per i nostri ospiti. Con la nostra piattaforma, puoi facilmente registrarti come utente e prenotare il tuo soggiorno desiderato in pochi semplici passaggi.",
      imageUrl: 'https://thebestrent.it/wp-content/uploads/2020/09/Airbnb-_thumb.jpg',
      projectUrl: 'https://static.vecteezy.com/system/resources/previews/017/710/348/non_2x/live-demo-training-seminar-courses-program-icon-sign-banner-design-vector.jpg',
      githubUrl1: 'https://github.com/paololauria/bnb-management',
      githubUrl2: 'https://github.com/paololauria/bnb-management-fe',
      technologies: [
        { name: 'Java', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png', url: 'URL_CLICCABILE_JAVA' },
        { name: 'JavaScript', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png', url: 'URL_CLICCABILE_JAVASCRIPT' },
        { name: 'TypeScript', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png', url: 'URL_CLICCABILE_TYPESCRIPT' },
        { name: 'HTML', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png', url: 'URL_CLICCABILE_HTML' },
        { name: 'CSS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png', url: 'URL_CLICCABILE_CSS' },
        { name: 'Angular', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', url: 'URL_CLICCABILE_ANGULAR' },
        { name: 'Spring', imageUrl: 'https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png', url: 'URL_CLICCABILE_TYPESCRIPT' },
        { name: 'Bootstrap', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/bootstrap-7-1175254.png', url: 'URL_CLICCABILE_BOOTSTRAP' },
        { name: 'Node.js', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png', url: 'URL_CLICCABILE_NODE_JS' },
        { name: 'Docker', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png', url: 'URL_CLICCABILE_DOCKER' },
        { name: 'SQL', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png', url: 'URL_CLICCABILE_SQL' },
        { name: 'Postman', imageUrl: 'https://www.svgrepo.com/show/354202/postman-icon.svg', url: 'URL_CLICCABILE_POSTMAN' },
        { name: 'Git', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/git-225996.png', url: 'URL_CLICCABILE_GIT' },
        { name: 'GitHub', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png', url: 'URL_CLICCABILE_GITHUB' },
        { name: 'PostgreSQL', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-226047.png', url: 'URL_CLICCABILE_POSTGRESQL' },
        { name: 'IntelliJ IDEA', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/intellij-idea-569199.png', url: 'URL_CLICCABILE_INTELLIJ_IDEA' },
        { name: 'Visual Studio Code', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/visual-studio-code-1868941-1583105.png', url: 'URL_CLICCABILE_VISUAL_STUDIO_CODE' }
      ]
    },
    { 
      id: 2, 
      title: 'Movie Theater', 
      subtitle: 'Prenota il tuo biglietto al cinema',
      description: "Il portale per prenotare i biglietti del cinema in modo rapido e semplice. Esplora la nostra selezione di film, scegli il tuo posto preferito in sala e acquista i biglietti direttamente online. Con un'ampia gamma di film disponibili e un'interfaccia intuitiva, rendiamo l'esperienza del cinema ancora più piacevole.",
      imageUrl: 'https://www.creativefabrica.com/wp-content/uploads/2018/12/Film-cinema-logo-vector-by-DEEMKA-STUDIO-3.jpg',
      projectUrl: 'https://static.vecteezy.com/system/resources/previews/017/710/348/non_2x/live-demo-training-seminar-courses-program-icon-sign-banner-design-vector.jpg',
      githubUrl1: 'https://github.com/paololauria/cinema',
      githubUrl2: 'https://github.com/paololauria/cinema-fe',
      technologies: [
        { name: 'Java', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/java-43-569305.png', url: 'URL_CLICCABILE_JAVA' },
        { name: 'JavaScript', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png', url: 'URL_CLICCABILE_JAVASCRIPT' },
        { name: 'TypeScript', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png', url: 'URL_CLICCABILE_TYPESCRIPT' },
        { name: 'HTML', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png', url: 'URL_CLICCABILE_HTML' },
        { name: 'CSS', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png', url: 'URL_CLICCABILE_CSS' },
        { name: 'Angular', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png', url: 'URL_CLICCABILE_ANGULAR' },
        { name: 'Spring', imageUrl: 'https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png', url: 'URL_CLICCABILE_TYPESCRIPT' },
        { name: 'Bootstrap', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/bootstrap-7-1175254.png', url: 'URL_CLICCABILE_BOOTSTRAP' },
        { name: 'Node.js', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png', url: 'URL_CLICCABILE_NODE_JS' },
        { name: 'Docker', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/docker-226091.png', url: 'URL_CLICCABILE_DOCKER' },
        { name: 'SQL', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/sql-4-190807.png', url: 'URL_CLICCABILE_SQL' },
        { name: 'Postman', imageUrl: 'https://www.svgrepo.com/show/354202/postman-icon.svg', url: 'URL_CLICCABILE_POSTMAN' },
        { name: 'Git', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/git-225996.png', url: 'URL_CLICCABILE_GIT' },
        { name: 'GitHub', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png', url: 'URL_CLICCABILE_GITHUB' },
        { name: 'PostgreSQL', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/postgresql-226047.png', url: 'URL_CLICCABILE_POSTGRESQL' },
        { name: 'IntelliJ IDEA', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/intellij-idea-569199.png', url: 'URL_CLICCABILE_INTELLIJ_IDEA' },
        { name: 'Visual Studio Code', imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/visual-studio-code-1868941-1583105.png', url: 'URL_CLICCABILE_VISUAL_STUDIO_CODE' }
      ]
    }
  ];

  constructor() { }

  getProjects() {
    return this.projects;
  }
}

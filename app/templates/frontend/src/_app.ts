import { AuthorizeStep, FetchConfig } from 'aurelia-auth';
import { Router, RouterConfiguration } from 'aurelia-router'
import { autoinject } from 'aurelia-framework';

@autoinject
export class App {
  router: Router;

  constructor(private fetchConfig: FetchConfig) { }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = '<%= _.slugify(appname) %>';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: 'pages/home/home', nav: true, title: 'Home' }
    ]);

    this.router = router;
  }

  activate() {
    this.fetchConfig.configure();
  }
}

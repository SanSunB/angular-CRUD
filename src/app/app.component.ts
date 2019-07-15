import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="nav">
    <a *ngFor="let item of nav"
    [routerLink]="item.link"
    routerLinkActive="active"
    [routerLinkActiveOptions]="{ exact: item.exact }">
      {{item.name}}
    </a>
  </nav>
  <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input-output';
  nav = [
    {link: '/',
    name: 'Home',
    exact: true
  },
  {link: '/passengers',
  name: 'Passengers',
  exact: true
},
    {link: '/oops',
    name: '404',
    exact: false}
  ]

}

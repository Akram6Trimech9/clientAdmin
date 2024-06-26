import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { CurrentUserService } from './services/currentUser.service';
import { LoginGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  template: '<router-outlet />',
  standalone: true,
  imports: [RouterOutlet] 
})
export class AppComponent implements OnInit {
  title = 'CoreUI Angular Admin Template';

  constructor(
    private currentUser : CurrentUserService ,
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    this.titleService.setTitle(this.title);
    // iconSet singleton
    this.iconSetService.icons = { ...iconSubset };
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });
    this.currentUser.setCurrentUser()
  }
}

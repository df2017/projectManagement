import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  $breadcrumbTitle: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  showIcon: boolean = false;

  constructor(public router: Router, private activatedRouter: ActivatedRoute) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
      }
      if (event instanceof NavigationEnd) {
        this.lastRoute(this.activatedRouter.snapshot.firstChild);
      }
      if (event instanceof NavigationError) {
        console.log(event);
      }
    });
  }

  ngOnInit() {}

  private lastRoute(activateRouter: ActivatedRouteSnapshot) {
    if (activateRouter.firstChild) {
      return this.lastRoute(activateRouter.firstChild);
    }
    if(activateRouter.data.headerTitle){
      if(activateRouter.data.headerTitle !== 'Project Management') {
        this.showIcon = true
      } else {
        this.showIcon = false;
      }
      this.$breadcrumbTitle.next(activateRouter.data.headerTitle);
    }

  }
}

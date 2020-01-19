import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../core/services/global/global.service';
// import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/feature', title: 'Feature',  icon:'design_bullet-list-67', class: '' },
    { path: '/admin/testscripts', title: 'TestScripts',  icon:'design_bullet-list-67', class: '' },
    { path: '/admin/keywords', title: 'Keywords',  icon:'design_bullet-list-67', class: '' },
    { path: '/admin/repository', title: 'Repository',  icon:'design_bullet-list-67', class: '' },
    { path: '/admin/testdata', title: 'Test Data',  icon:'design_bullet-list-67', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  globalService:any;
  showItems = true;

  constructor(private globalsvc:GlobalService ) { 
      this.globalService=globalsvc;
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}

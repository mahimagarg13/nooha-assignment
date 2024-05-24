import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isSubMenuOpen: boolean = false;
  isConfigMenuOpen: boolean = false;

  toggleSubMenu() {
    this.isSubMenuOpen = !this.isSubMenuOpen;
  }
  toggleSubMenuConfig() {
    this.isConfigMenuOpen = !this.isConfigMenuOpen;
  }
}

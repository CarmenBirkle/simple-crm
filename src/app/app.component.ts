import { AfterViewInit, Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSidenavContainer } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;

  @ViewChild('drawer') drawer!: MatDrawer;
  isMobileView = false;

  @HostListener('window:resize', ['$event'])
  onResize($event: any) {
    this.checkViewport();
  }

  ngAfterViewInit() {
    this.checkViewport();
    this.sidenavContainer.scrollable.elementScrolled().subscribe(() => {
      // React to scrolling
    });
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 768; // TODO Adjust the breakpoint

    // Set the attributes based on viewport
    this.drawer.opened = !this.isMobileView;
    this.drawer.mode = this.isMobileView ? 'over' : 'side';
  }
}

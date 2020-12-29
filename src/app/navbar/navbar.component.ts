import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbarToggler') navbarToggle: ElementRef<HTMLElement> | undefined;
  constructor() { }

  ngOnInit(): void {
  }

  navLinkClicked(): void {
    if (!this.navbarToggle) {
      return;
    }

    const el: HTMLElement = this.navbarToggle.nativeElement;
    el.click();
  }
}

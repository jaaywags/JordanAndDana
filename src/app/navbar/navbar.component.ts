import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface CustomHtmlElement extends HTMLElement {
  ariaExpanded?: string;
}
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

    const el: CustomHtmlElement = this.navbarToggle.nativeElement;
    if (el.ariaExpanded === "true") {
      el.click();
    }
  }
}

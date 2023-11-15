import { Component, HostListener, ElementRef, AfterViewInit } from '@angular/core';

declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'ECommerceClient';

  menuHolder!: HTMLElement | null;
  siteBrand!: HTMLElement | null;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    this.menuHolder = this.elRef.nativeElement.querySelector('#menuHolder');
    this.siteBrand = this.elRef.nativeElement.querySelector('#siteBrand');

    if (!this.menuHolder || !this.siteBrand) {
      console.error('menuHolder or siteBrand not found!');
    }
  }

  menuToggle() {
    if (this.menuHolder) {
      if (this.menuHolder.classList.contains("drawMenu")) {
        this.menuHolder.classList.remove("drawMenu");
      } else {
        this.menuHolder.classList.add("drawMenu");
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (this.siteBrand) {
      if (window.innerWidth < 420) {
        this.siteBrand.innerHTML = "MAS";
      } else {
        this.siteBrand.innerHTML = "E-Commerce Site";
      }
    }
  }
}
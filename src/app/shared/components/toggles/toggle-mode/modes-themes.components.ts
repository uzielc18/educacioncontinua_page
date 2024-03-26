import { animate, state, style, transition, trigger } from "@angular/animations";
import { CommonModule, NgClass } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: 'mode-themes-component',
  templateUrl: './modes-themes.components.html',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  animations: [
    trigger('slideRightToLeft', [
      state('light', style({
        transform: 'translateX(0)',
        opacity: 1,
        display: 'block'
      })),
      state('dark', style({
        transform: 'translateX(100%)',
        opacity: 0,
        display: 'none'
      })),
      transition('light => dark', animate('400ms ease-out')),
      transition('dark => light', animate('400ms ease-in'))
    ]),

    trigger('slideLeftToRight', [
      state('light', style({
        transform: 'translateX(0)',
        opacity: 1,
        display: 'block'
      })),
      state('dark', style({
        transform: 'translateX(-400%)',
        opacity: 0,
        display: 'none'
      })),
      transition('light => dark', animate('400ms ease-out')),
      transition('dark => light', animate('400ms ease-in'))
    ]),

    trigger('slideRightToLeftDark', [
      state('dark', style({
        transform: 'translateX(0)',
        opacity: 1,
        display: 'block'
      })),
      state('light', style({
        transform: 'translateX(400%)',
        opacity: 0,
        display: 'none'
      })),
      transition('light => dark', animate('400ms ease-out')),
      transition('dark => light', animate('400ms ease-in'))
    ]),
    trigger('slideLeftToRightDark', [
      state('dark', style({
        transform: 'translateX(0)',
        opacity: 1,
        display: 'block'
      })),
      state('light', style({
        transform: 'translateX(-100%)',
        opacity: 0,
        display: 'none'
      })),
      transition('light => dark', animate('400ms ease-out')),
      transition('dark => light', animate('400ms ease-in'))
    ]),
  ]
})
export class ModeThemesComponent implements OnInit {
  isDarkMode: boolean = false;
  isToggle: string = 'light';

  constructor() { }

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme == 'dark') {
      document.documentElement.classList.add('dark');
      this.isToggle = savedTheme;
    } else if (savedTheme == 'light') {
      document.documentElement.classList.remove('dark');
      this.isToggle = savedTheme;
    } else {
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (this.isDarkMode) {
        this.isToggle = 'dark';
        document.documentElement.classList.add('dark');
      } else {
        this.isToggle = 'light';
        document.documentElement.classList.remove('dark');
      }
    }
  }

  darkmode() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme == null) {
      this.isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

      if (this.isDarkMode) {
        this.isToggle = 'light';
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
          this.isToggle = 'dark';
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
      }
    } else if (savedTheme == 'dark') {
      this.isToggle = 'light';
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else if (savedTheme == 'light') {
      this.isToggle = 'dark';
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }

    // this.toggle();
  }
}

import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'header-component',
  templateUrl: './header.components.html',
  // standalone: true,
  // imports: [NgClass, CommonModule, AppRoutingModule, BrowserModule],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('1.0s ease-out', style({ opacity: 1, transform: 'scale(1)' })), //ease-out
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('0.3s ease-out', style({ opacity: 0, transform: 'scale(1)' })), //ease-out
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  itemsHeader = [
    { name: 'Inicio', page: '/', active: true },
    { name: 'Cursos', page: '/list-of-courses', active: false },
    { name: 'Programas', page: '/programs', active: false },
    { name: 'Noticias', page: '/', active: false },
    { name: 'Eventos', page: '/', active: false },
  ];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  nextPage(page: string) {
    this.itemsHeader = this.itemsHeader.map((item) => {
      if (item.name === page) {
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
  }
}

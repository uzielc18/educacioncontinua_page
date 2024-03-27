import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

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

    trigger('moveTop', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('1s ease-out', style({ transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateY(100%)' }),
        animate('1s ease-out', style({ transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  isDarkMode: boolean = false;

  itemsHeader = [
    { name: 'Inicio', page: '/', active: true },
    { name: 'Cursos', page: '/list-of-courses', active: false },
    { name: 'Programas', page: '/programs', active: false },
    { name: 'Noticias', page: '/', active: false },
    { name: 'Eventos', page: '/', active: false },
  ];

  constructor() {}

  ngOnInit(): void {}

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

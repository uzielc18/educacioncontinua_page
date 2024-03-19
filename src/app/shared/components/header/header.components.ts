import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'header-component',
  templateUrl: './header.components.html',
  standalone: true,
  imports: [NgClass, CommonModule, AppRoutingModule],
})
export class HeaderComponent {
  itemsHeader = [
    { name: 'Inicio', page: '/', active: true },
    { name: 'Cursos', page: '/list-of-courses', active: false },
    { name: 'Noticias', page: '/', active: false },
    { name: 'Eventos', page: '/', active: false },
  ];

  constructor() {}

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

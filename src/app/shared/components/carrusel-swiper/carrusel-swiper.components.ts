import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'swiper-carrusel',
  templateUrl: './carrusel-swiper.components.html',
  styleUrls: ['./carrusel-swiper.components.css'],
  standalone: true,
  imports: [CommonModule, NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations:[
    trigger('moveRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('1s ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(100%)' }),
        animate('1s ease-out', style({ transform: 'translateX(0)' })),
      ]),
    ]),
  ]
})
export class SwiperCarrusel {}

import { CommonModule, NgClass } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'swiper-carrusel',
  templateUrl: './carrusel-swiper.components.html',
  styleUrls: ['./carrusel-swiper.components.css'],
  standalone: true,
  imports: [CommonModule, NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SwiperCarrusel {}

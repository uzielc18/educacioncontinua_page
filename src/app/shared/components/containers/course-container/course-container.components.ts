import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-container',
  templateUrl: './course-container.components.html',
  standalone: true,
  imports: [NgClass, CommonModule],
})
export class CourseContainer {
  @Input() bannerTop: string = '';
  @Input() categories: string = '';
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() f_home: string = '';
  @Input() modality: string = '';
  @Input() price: number = 0;
  @Input() pricePromotional: number = 0;

  constructor() {}
}

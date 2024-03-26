import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router,
  ) {}

  viewOfACourses() {
    const title = this.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    const encodedTittleCourse = encodeURIComponent(title.replace(/ /g, "-"));
    this.router.navigate(['/view-of-a-course', encodedTittleCourse]);
  }
}

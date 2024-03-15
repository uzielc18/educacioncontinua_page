import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-container',
  templateUrl: './course-container.components.html',
  standalone: true,
  imports: [NgClass, CommonModule],
})
export class CourseContainer {
  @Input() mxwidth: string = 'w-full';
  @Input() mxheight: string = 'h-full';
  @Input() bgColor: string = 'bg-write';

  constructor() {}
}

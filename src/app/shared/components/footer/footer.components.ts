import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'footer-component',
  templateUrl: './footer.components.html',
  standalone: true,
  imports: [NgClass, CommonModule],
})
export class FooterComponent {
  constructor() {}
}

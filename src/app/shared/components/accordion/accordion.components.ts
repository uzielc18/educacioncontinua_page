import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'accordion-component',
  templateUrl: './accordion.components.html',
  standalone: true,
  imports: [CommonModule, NgClass, AppRoutingModule, BrowserAnimationsModule],
  animations: [

  ]
})
export class AccordionComponent {
  isOpen: boolean = true;

  constructor() {}

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

}

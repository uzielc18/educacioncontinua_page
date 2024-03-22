import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, NgClass } from '@angular/common';
import { Component, ElementRef, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CheckBoxComponent } from '../checkbox/checkbox.components';

@Component({
  selector: 'accordion-component',
  templateUrl: './accordion.components.html',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    AppRoutingModule,
    BrowserAnimationsModule,
    CheckBoxComponent,
  ],
  animations: [
    trigger('fadeInOut', [
      state('open', style({
        opacity: 1,
        height: '*',
        display: 'block',
      })),
      state('closed', style({
        opacity: 0,
        height: '0px',
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.2s ease-out')
      ]),
      transition('closed => open', [
        animate('0.2s ease-in')
      ]),
    ])
  ]
})
export class AccordionComponent {
  @Input() nameTitle: string = '';

  isOpen: boolean = true;

  constructor(private elementRef: ElementRef) {}

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }

}

import { CommonModule, NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'evenets-component',
  templateUrl: './events.components.html',
  standalone: true,
  imports: [CommonModule, NgClass, AppRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EventsComponent {
  constructor() {}
}

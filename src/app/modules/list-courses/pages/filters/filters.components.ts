import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccordionComponent } from 'src/app/shared/components/accordion/accordion.components';
import { CheckBoxComponent } from 'src/app/shared/components/checkbox/checkbox.components';

@Component({
  selector: 'filters-component',
  templateUrl: './filters.components.html',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    AppRoutingModule,
    AccordionComponent,
    CheckBoxComponent,
  ],
})
export class FiltersComponents {
  constructor() {}
}

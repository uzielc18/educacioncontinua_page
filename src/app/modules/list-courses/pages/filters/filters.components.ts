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

  categories = [
    { name: 'Ingeniería', quantity: 23 },
    { name: 'Arquitectura', quantity: 16 },
    { name: 'Comunicaciones', quantity: 24 },
    { name: 'Marketing y diseño', quantity: 89 },
    { name: 'Enfermeria', quantity: 3 },
    { name: 'Redes', quantity: 57 },
  ];

  ratings = [
    { name: '5 estrellas' },
    { name: '4 estrellas' },
    { name: 'De 1 a 3 estrellas' },
  ];

  price = [
    { name: 'Libre' },
    { name: 'Por rangos' }
  ];

  modality = [
    { name: "Online" },
    { name: "Presencial" },
    { name: "Semi Presencial" },
  ];

  programs = [
    { name: 'Diplomando'},
    { name: 'Segunda especialidad'},
  ];

  type = [
    { name: 'Nuevos cursos' },
    { name: 'Próximos cursos' },
    { name: 'Todos los cursos publicados' },
  ];

  categoriesFilter = { name: "Categorias", categories: this.categories };

  filters = [
    { name: "Valoraciones", categories: this.ratings },
    { name: "Precio", categories: this.price },
    { name: "Modalidad", categories: this.modality },
    { name: "Programas", categories: this.programs },
    { name: "Tipos", categories: this.type },

  ];
  constructor() {}
}

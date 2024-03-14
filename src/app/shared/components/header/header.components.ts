import { CommonModule, NgClass } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'header-component',
    templateUrl: './header.components.html',
    standalone: true,
    imports: [ NgClass, CommonModule, ]
})

export class HeaderComponent {

  itemsHeader = [
    { name: 'Home', page: '/', active: true },
    { name: 'Cursos', page: '/', active: false },
    { name: 'Neus', page: '/', active: false },
    { name: 'Eventos', page: '/', active: false },
  ];

    constructor() {}
}

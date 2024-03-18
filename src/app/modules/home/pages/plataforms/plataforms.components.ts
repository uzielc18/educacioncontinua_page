import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'plataforms-component',
  templateUrl: './plataforms.components.html',
  standalone: true,
  imports: [CommonModule, NgClass, AppRoutingModule],
})
export class PlataformsComponent {
  constructor() {}
}

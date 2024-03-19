import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'video-instructivo',
  templateUrl: './video-instructivo.components.html',
  standalone: true,
  imports: [CommonModule, NgClass, AppRoutingModule],
})
export class VideoInstructivoComponent {
  constructor() {}
}

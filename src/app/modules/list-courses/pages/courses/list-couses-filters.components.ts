import { CommonModule, NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: 'list-courses-filters',
  templateUrl: './list-couses-filters.components.html',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    AppRoutingModule
  ]
})
export class ListCoursesFiltersComponent {
  constructor() {}
}

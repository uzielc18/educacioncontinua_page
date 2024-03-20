import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'select-component',
  templateUrl: './select.components.html',
  standalone: true,
  imports: [CommonModule, NgClass, AppRoutingModule, FormsModule ],
})
export class SelectComponent {
  selectedItem: string = '';
  searchKeyword: string = '';

  countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
                 "Brazil", "Canada", "China", "Denmark", "Ethiopia", "Finland", "France", "Germany",
                 "Hungary", "Iceland", "India", "Indonesia", "Iran", "Italy", "Japan", "Malaysia",
                 "Maldives", "Mexico", "Morocco", "Nepal", "Netherlands", "Nigeria", "Norway", "Pakistan",
                 "Peru", "Russia", "Romania", "South Africa", "Spain", "Sri Lanka", "Sweden", "Switzerland",
                 "Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

  filteredCountries: string[] = [];
  dropdownOpen: boolean = false;

  constructor() {
    this.filteredCountries = this.countries;
  }

  toggleDropdown() {
    this.searchKeyword = '';
    this.filteredCountries = this.countries;
    this.dropdownOpen = !this.dropdownOpen;
  }

  updateselectedItem(country: string) {
    this.selectedItem = country;
    this.dropdownOpen = false;
  }

  filterCountries() {
    this.filteredCountries = this.countries.filter(country =>
      country.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }
}

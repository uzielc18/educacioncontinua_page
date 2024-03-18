import { CommonModule, NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";

@Component({
  selector: 'courses-components',
  templateUrl: './courses.components.html',
  standalone: true,
  imports: [
    CommonModule, NgClass, AppRoutingModule,
  ]
})

export class CoursesComponents {
  coursesData = [
    { id: 1, imgage: 'https://www.educaccionperu.org/wp-content/uploads/2020/05/Portada-cursos.jpg', title: 'Abobe Photoshop de basico a avanzado',  price: 100.45, pricePromotional: 95.10, calification: 4, categoria: 'Diseño', f_inicio: '18/03/2024', modalidad: 'Online' },
    { id: 2, imgage: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Creación de una aplicación utilizando flutter y chatGPT', price: 56.79, pricePromotional: 56.79, calification: 2, categoria: 'Desarrollo', f_inicio: '18/03/2024', modalidad: 'Presencial' },
    { id: 3, imgage: 'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png', title: 'Curso avanzado como realizar una conexión en serie', price: 407, pricePromotional: 407, calification: 1, categoria: 'Electricidad', f_inicio: '18/03/2024', modalidad: 'Online' },
    { id: 4, imgage: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Diseño vial e ingeniería de pavimentos ', price: 204, pricePromotional: 193.10, calification: 5, categoria: 'Ing. civil', f_inicio: '18/03/2024', modalidad: 'Semi Presencial' },
    // { id: 5, imgage: 'https://www.educaccionperu.org/wp-content/uploads/2020/05/Portada-cursos.jpg', title: 'Curso', price: 0, pricePromotional: 0, calification: 2, categoria: 'Comunicaciones', f_inicio: '18/03/2024', modalidad: 'Semi Presencial' },
    // { id: 6, imgage: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Curso ', price: 506.00, pricePromotional: 476.00, calification: 3, categoria: 'Gestion empresarial', f_inicio: '18/03/2024', modalidad: 'Online' },
  ]

  constructor() {}
}

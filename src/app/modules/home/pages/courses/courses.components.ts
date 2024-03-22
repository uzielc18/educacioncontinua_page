import { CommonModule, NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CourseContainer } from "src/app/shared/components/containers/course-container/course-container.components";
import { SelectComponent } from "src/app/shared/components/select/select.components";

@Component({
  selector: 'courses-components',
  templateUrl: './courses.components.html',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    AppRoutingModule,
    CourseContainer,
    SelectComponent,
  ]
})

export class CoursesComponents {
  coursesDataProx = [
    { id: 1, image: 'https://www.educaccionperu.org/wp-content/uploads/2020/05/Portada-cursos.jpg', title: 'Abobe Photoshop de basico a avanzado',  price: 100.45, pricePromotional: 95.10, categoria: 'Diseño', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: 'Próximamente' },
    { id: 2, image: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Creación de una aplicación utilizando flutter y chatGPT', price: 56.79, pricePromotional: 56.79, categoria: 'Desarrollo', f_inicio: '18/03/2024', modalidad: 'Presencial', bannerTop: 'Próximamente' },
    { id: 3, image: 'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png', title: 'Curso avanzado como realizar una conexión en serie', price: 407, pricePromotional: 407, categoria: 'Electricidad', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: 'Próximamente' },
    { id: 4, image: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Diseño vial e ingeniería de pavimentos ', price: 204, pricePromotional: 193.10, categoria: 'Ing. civil', f_inicio: '18/03/2024', modalidad: 'Semi Presencial', bannerTop: 'Próximamente' },
  ]

  coursesDataNew = [
    { id: 1, image: 'https://www.educaccionperu.org/wp-content/uploads/2020/05/Portada-cursos.jpg', title: 'Abobe Photoshop de basico a avanzado',  price: 100.45, pricePromotional: 95.10, categoria: 'Diseño', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: 'Nuevo' },
    { id: 2, image: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Creación de una aplicación utilizando flutter y chatGPT', price: 56.79, pricePromotional: 56.79, categoria: 'Desarrollo', f_inicio: '18/03/2024', modalidad: 'Presencial', bannerTop: 'Nuevo' },
    { id: 3, image: 'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png', title: 'Curso avanzado como realizar una conexión en serie', price: 407, pricePromotional: 407, categoria: 'Electricidad', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: 'Nuevo' },
    { id: 4, image: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Diseño vial e ingeniería de pavimentos ', price: 204, pricePromotional: 193.10, categoria: 'Ing. civil', f_inicio: '18/03/2024', modalidad: 'Semi Presencial', bannerTop: 'Nuevo' },
  ]

  coursesData = [
    { id: 1, image: 'https://www.educaccionperu.org/wp-content/uploads/2020/05/Portada-cursos.jpg', title: 'Abobe Photoshop de basico a avanzado',  price: 100.45, pricePromotional: 95.10, categoria: 'Diseño', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: '' },
    { id: 2, image: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Creación de una aplicación utilizando flutter y chatGPT', price: 56.79, pricePromotional: 56.79, categoria: 'Desarrollo', f_inicio: '18/03/2024', modalidad: 'Presencial', bannerTop: '' },
    { id: 3, image: 'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png', title: 'Curso avanzado como realizar una conexión en serie', price: 407, pricePromotional: 407, categoria: 'Electricidad', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: '' },
    { id: 4, image: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Diseño vial e ingeniería de pavimentos ', price: 204, pricePromotional: 193.10, categoria: 'Ing. civil', f_inicio: '18/03/2024', modalidad: 'Semi Presencial', bannerTop: '' },
  ]

  constructor() {}
}

import { CommonModule, NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { CourseContainer } from "src/app/shared/components/containers/course-container/course-container.components";

@Component({
  selector: 'list-courses-filters',
  templateUrl: './list-couses-filters.components.html',
  standalone: true,
  imports: [
    CommonModule,
    NgClass,
    AppRoutingModule,
    CourseContainer
  ]
})
export class ListCoursesFiltersComponent {
  coursesData = [
    { id: 1, image: 'https://img.freepik.com/foto-gratis/editor-estudio-haciendo-trabajo-retocador-pantalla-tactil_482257-10565.jpg?w=1380&t=st=1711554138~exp=1711554738~hmac=540345f47056f714eb40d088a5cb1e15b17277a0012b73c3e84b58ad43872581', title: 'Abobe Photoshop de basico a avanzado',  price: 100.45, pricePromotional: 95.10, categoria: 'Diseño', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: 'Nuevo' },
    { id: 1, image: 'https://img.freepik.com/foto-gratis/collage-fondo-programacion_23-2149901790.jpg?w=1380&t=st=1711553968~exp=1711554568~hmac=27a446773b7bb9bd8e9e704eb31e4665b34aefa952596fa681e67619af6f13c8', title: 'Paginas web reactivas utilizando php',  price: 100.45, pricePromotional: 95.10, categoria: 'Diseño', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: 'Próximamente' },
    { id: 2, image: 'https://img.freepik.com/foto-gratis/representacion-experiencia-usuario-diseno-interfaz_23-2150169852.jpg?w=1380&t=st=1711554149~exp=1711554749~hmac=8fcb4e00c805aef997e7aa3fee548d0a30d40e258a7128554daf849436ea8939', title: 'Creación de una aplicación utilizando flutter y chatGPT', price: 56.79, pricePromotional: 56.79, categoria: 'Desarrollo', f_inicio: '18/03/2024', modalidad: 'Presencial', bannerTop: 'Nuevo' },
    { id: 1, image: 'https://img.freepik.com/foto-gratis/fondo-banner-almacenamiento-nube_53876-108506.jpg?w=1380&t=st=1711553914~exp=1711554514~hmac=75f95c1fd4e7bec13a35301ac58461fcce59d39bf790cffba250b57548d4a7ad', title: 'Arma tu centro de datos a nivel profesional',  price: 100.45, pricePromotional: 95.10, categoria: 'Diseño', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: '' },
    { id: 4, image: 'https://img.freepik.com/foto-gratis/retrato-hacker_23-2148165933.jpg?w=1380&t=st=1711553975~exp=1711554575~hmac=d846deacf06d8987f8810e8e6703eef7f929da0791ace8d9c9d45470cafbea05', title: 'Redes informaticas el inicio de lo anonimo', price: 204, pricePromotional: 193.10, categoria: 'Ing. civil', f_inicio: '18/03/2024', modalidad: 'Semi Presencial', bannerTop: 'Nuevo' },

    { id: 4, image: 'https://img.freepik.com/foto-gratis/persona-que-usa-computadora-portatil-usando-inteligencia-artificial-generar-imagenes_23-2150905296.jpg?w=1380&t=st=1711553962~exp=1711554562~hmac=20ee57f184dde10ab081f82ea9a4e8fc17d7b103352a23f086110d39fd00f5a5', title: 'Crea una inteligencia artificial para el reconocimiento de la violencia verbal', price: 204, pricePromotional: 193.10, categoria: 'Ing. civil', f_inicio: '18/03/2024', modalidad: 'Semi Presencial', bannerTop: '' },
    { id: 3, image: 'https://img.freepik.com/foto-gratis/mano-junto-bombilla-encendida_1232-674.jpg?w=1380&t=st=1711553977~exp=1711554577~hmac=55ded0b5d6f8cd65a281196b57ad9a84c374299affc11f8c1c4cc58a3b492ca3', title: 'Curso avanzado como realizar una conexión en serie', price: 407, pricePromotional: 407, categoria: 'Electricidad', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: 'Nuevo' },
    { id: 2, image: 'https://img.freepik.com/foto-gratis/insignia-seguridad-internet-3d_1048-18106.jpg?w=826&t=st=1711553971~exp=1711554571~hmac=3b295143dc88e9dd2c1a841556e9fc1647db37aa6f67bcf9560c30991affba7c', title: 'Seguridad y protección de los datos informaticos', price: 56.79, pricePromotional: 56.79, categoria: 'Desarrollo', f_inicio: '18/03/2024', modalidad: 'Presencial', bannerTop: 'Próximamente' },

    { id: 2, image: 'https://img.freepik.com/foto-gratis/collage-operaciones-ingresos_23-2150847863.jpg?w=1380&t=st=1711553923~exp=1711554523~hmac=2dd5b97b2ea433e880b88a0ac1aecd5cc7e45b8aded3f7462de771c052587438', title: 'Aprendiendo a como ser un ingenierio de datos', price: 56.79, pricePromotional: 56.79, categoria: 'Desarrollo', f_inicio: '18/03/2024', modalidad: 'Presencial', bannerTop: '' },
    { id: 3, image: 'https://img.freepik.com/foto-gratis/concepto-control-calidad-estandar-m_23-2150041850.jpg?w=1380&t=st=1711553962~exp=1711554562~hmac=e17a9b171aff52a10e1dc8df0f2e30ded4a22555be44416cb484e30c0381c43c', title: 'Curso avanzado como realizar una conexión en serie', price: 407, pricePromotional: 407, categoria: 'Electricidad', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: 'Próximamente' },
    { id: 3, image: 'https://img.freepik.com/foto-gratis/finanzas_1418-79.jpg?w=1380&t=st=1711553899~exp=1711554499~hmac=ca0a02c833fd000463a95122a142bd6c58cbca6259edcfe28a26a458551020ac', title: 'Realiza auditorias a nivel empresarial de alto nivel', price: 407, pricePromotional: 407, categoria: 'Electricidad', f_inicio: '18/03/2024', modalidad: 'Online', bannerTop: '' },
  ];

  constructor() {}
}

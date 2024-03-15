import { Component } from "@angular/core";

@Component({
    selector: "home-page",
    templateUrl: './home-page.components.html',
})

export class HomePageComponent {
  coursesData = [
    { id: 1, imgage: 'https://www.educaccionperu.org/wp-content/uploads/2020/05/Portada-cursos.jpg', title: 'Curso ', description: 'Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, ', price: 100.45, pricePromotional: 95.10, calification: 4 },
    { id: 2, imgage: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Curso ', description: 'Aqui va la descriptionAqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, ', price: 506.00, pricePromotional: 506.00, calification: 5 },
    { id: 3, imgage: 'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png', title: 'Curso ', description: 'Aqui va la descriptionAqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, ', price: 0, pricePromotional: 0, calification: 2 },
    { id: 4, imgage: 'https://www.educaccionperu.org/wp-content/uploads/2020/05/Portada-cursos.jpg', title: 'Curso ', description: 'Aqui va la descriptionAqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, ', price: 0, pricePromotional: 0, calification: 4 },
    { id: 5, imgage: 'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png', title: 'Curso', description: 'Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, ', price: 0, pricePromotional: 0, calification: 1 },
    { id: 6, imgage: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Curso ', description: 'Aqui va la descriptionAqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, ', price: 0, pricePromotional: 0, calification: 5 },
    { id: 7, imgage: 'https://www.educaccionperu.org/wp-content/uploads/2020/05/Portada-cursos.jpg', title: 'Curso', description: 'Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, ', price: 0, pricePromotional: 0, calification: 2 },
    { id: 8, imgage: 'https://ceas.pe/wp-content/uploads/2022/11/Portada-3.jpg', title: 'Curso ', description: 'Aqui va la descriptionAqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, Aqui va la description, ', price: 506.00, pricePromotional: 476.00, calification: 3 },
  ]
    constructor() { }
}

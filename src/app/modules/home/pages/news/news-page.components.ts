import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'news-page',
  templateUrl: './news-page.components.html',
  standalone: true,
  imports: [ CommonModule, NgClass, AppRoutingModule ]
})
export class NewsPage {
  news = [
    { title: 'Inscripciones abiertas', description: 'Ha llegado el moneto que te pongas a la acción postula y asegura tu ingreso en la UPeU con una educación de formación cristiana. No pierdas estas oportunidad, ven y preparate para la vida con nosotros.', fecha: '02/02/2024', hora: '10:45 Am', image: 'https://elcomercio.pe/resizer/r7GQnvufo5EWMq-sFPd6FGLxJU8=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/7GCPLFTYO5HMLJIZFQSTRQJGAU.png' },
    { title: 'Inscripciones abiertas', description: 'Ha llegado el moneto que te pongas a la acción postula y asegura tu ingreso en la UPeU con una educación de formación cristiana. No pierdas estas oportunidad, ven y preparate para la vida con nosotros.', fecha: '02/02/2024', hora: '10:45 Am', image: 'https://d3nqlc6zkdn9bc.cloudfront.net/wp-content/uploads/2021/01/22161439/que-es-linkedin-y-para-sirve.jpg' },
    { title: 'Inscripciones abiertas', description: 'Ha llegado el moneto que te pongas a la acción postula y asegura tu ingreso en la UPeU con una educación de formación cristiana. No pierdas estas oportunidad, ven y preparate para la vida con nosotros.', fecha: '02/02/2024', hora: '10:45 Am', image: 'https://www.clarin.com/img/2024/01/09/Y58caBb___600x600__1.jpg' },
    { title: 'Inscripciones abiertas', description: 'Ha llegado el moneto que te pongas a la acción postula y asegura tu ingreso en la UPeU con una educación de formación cristiana. No pierdas estas oportunidad, ven y preparate para la vida con nosotros.', fecha: '02/02/2024', hora: '10:45 Am', image: 'https://e.rpp-noticias.io/xlarge/2022/12/13/161316_1360673.jpg' },
  ]
  constructor() {}
}

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// SWIPER JS
import { register } from 'swiper/element/bundle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.components';
import { HomePageComponent } from './modules/home/home-page.components';
import { SwiperCarrusel } from './shared/components/carrusel-swiper/carrusel-swiper.components';
import { CourseContainer } from './shared/components/containers/course-container/course-container.components';
import { FooterComponent } from './shared/components/footer/footer.components';

// SWIPER JS
register();
//

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    //  COMPONENTS STAND ALONE
    HeaderComponent,
    SwiperCarrusel,
    CourseContainer,
    FooterComponent,
    //
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

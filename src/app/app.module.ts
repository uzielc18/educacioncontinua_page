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
import { ListOfCoursesComponent } from './modules/list-courses/list-courses.components';
import { NewsPage } from './modules/home/pages/news/news-page.components';
import { CoursesComponents } from './modules/home/pages/courses/courses.components';
import { PlataformsComponent } from './modules/home/pages/plataforms/plataforms.components';
import { VideoInstructivoComponent } from './modules/home/pages/video/video-instructivo.components';
import { SuccessStoriesComponent } from './modules/home/pages/stories/success-stories.components';
import { EventsComponent } from './modules/home/pages/events/events.components';
import { AccordionComponent } from './shared/components/accordion/accordion.components';
import { CheckBoxComponent } from './shared/components/checkbox/checkbox.components';
import { SelectComponent } from './shared/components/select/select.components';
import { FiltersComponents } from './modules/list-courses/pages/filters/filters.components';
import { ListCoursesFiltersComponent } from './modules/list-courses/pages/courses/list-couses-filters.components';

// SWIPER JS
register();
//

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    ListOfCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,

    //  COMPONENTS STAND ALONE HOME PAGE
    SwiperCarrusel,
    CoursesComponents,
    PlataformsComponent,
    VideoInstructivoComponent,
    SuccessStoriesComponent,
    NewsPage,
    EventsComponent,
    FooterComponent,

    // COMPONENTS STAND ALONE COURSES PAGE
    FiltersComponents,
    ListCoursesFiltersComponent,

    // COMPONENTS STAND ALONE GENERALS
    CourseContainer,
    AccordionComponent,
    CheckBoxComponent,
    SelectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

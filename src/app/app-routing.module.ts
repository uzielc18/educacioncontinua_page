import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page.components';
import { ListOfCoursesComponent } from './modules/list-courses/list-courses.components';
import { HeaderComponent } from './shared/components/header/header.components';
import { ViewCoursesComponent } from './modules/view-courses/view-courses.components';

const routesHeader: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'list-of-courses', component: ListOfCoursesComponent },
  { path: 'view-of-a-course/:name-course', component: ViewCoursesComponent },
];

const routes: Routes = [
  { path: '', component: HeaderComponent, children: routesHeader },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

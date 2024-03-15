import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page.components';
import { ListOfCoursesComponent } from './modules/list-courses/list-courses.components';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'list-of-courses', component: ListOfCoursesComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

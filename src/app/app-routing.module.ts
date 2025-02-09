import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { PreIntermediateComponent } from './pre-intermediate/pre-intermediate.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { ContactComponent } from './contact/contact.component';
import { Lesson1Component } from './beginner/lesson1/lesson1.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: AboutComponent },
  { path: 'get-started', component: GetStartedComponent },
  { path: 'beginner', component: BeginnerComponent },
  { path: 'pre-intermediate', component: PreIntermediateComponent },
  { path: 'intermediate', component: IntermediateComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'lesson1', component: Lesson1Component },


//   { path: 'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent) },
//   { path: 'services', loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent) },
//   { path: 'contact', loadComponent: () => import('./contact/contact.component').then(m => m.ContactComponent) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

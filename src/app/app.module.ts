import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { BeginnerComponent } from './beginner/beginner.component';
import { PreIntermediateComponent } from './pre-intermediate/pre-intermediate.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { ContactComponent } from './contact/contact.component';
import { Lesson1Component } from './beginner/lesson1/lesson1.component';
import { Lesson2Component } from './beginner/lesson2/lesson2.component';
import { Lesson3Component } from './beginner/lesson3/lesson3.component';
import { Lesson4Component } from './beginner/lesson4/lesson4.component';
import { Lesson5Component } from './beginner/lesson5/lesson5.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    GetStartedComponent,
    BeginnerComponent,
    PreIntermediateComponent,
    IntermediateComponent,
    ContactComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Lesson4Component,
    Lesson5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

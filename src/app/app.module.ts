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
    ContactComponent
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

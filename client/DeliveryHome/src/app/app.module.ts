<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { AgmCoreModule } from '@agm/core';

import {Routes, RouterModule} from '@angular/router';

import { RegisterComponent } from './register/register.component';

const appRoutes: Routes =[
  
    { path: 'register', component: RegisterComponent},
    
   
    ];






@NgModule({
    imports:      [ BrowserModule, FormsModule ,  
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyANsMUgTON1gtAx6okd1VWPEhmpZb2-3A0'
    })
    
    
    
    ],
    
    declarations: [ AppComponent , RegisterComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
>>>>>>> Igor-Klipkov

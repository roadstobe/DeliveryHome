<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    NavComponent,
    AuthComponent
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

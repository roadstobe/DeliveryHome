import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD


const routes: Routes = [];
=======
import {RegisterComponent} from './register/register.component'

const routes: Routes = [
  { path: 'register', component: RegisterComponent}
];
>>>>>>> Igor-Klipkov

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

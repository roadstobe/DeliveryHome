import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  onSubmit(form: NgForm){
    // if(form.valid){
    //   this.userService.register(form.value.userName, form.value.email ,form.value.password )
    //   .subscribe(data=>{
    //     console.log(data);
    //     alertify.notify('You registered successfully', 'success', 5, function(){  console.log('dismissed'); });
    //     this.router.navigate(['/login']);
    //   },
    // (error)=>{console.log(error);
    //   });
    // }
  }
  constructor(/*private userService:UserService ,*/  private router :Router) { }
  
  
    ngOnInit(): void {
    }


}

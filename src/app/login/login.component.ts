import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  constructor() { }

  public myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup ({
      user : new FormControl("", Validators.required),
      password : new FormControl("", [Validators.required]),
    })
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.myForm.reset()
  }
}
 

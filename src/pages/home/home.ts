import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bienvenida } from '../bienvenida/bienvenida';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loginForm: FormGroup;

  constructor(public navCtrl: NavController, private fb:FormBuilder) {
    this.loginForm = fb.group({
      'username': ['',[Validators.required, Validators.pattern(/^ [a-z] {6,30}^/)]],
      'paswd': ['', [Validators.required, Validators.pattern(/^([0-9@ittepic]){8,21}$/)]]
    })
  }

  login(){
    this.navCtrl.setRoot(Bienvenida);
  }

}

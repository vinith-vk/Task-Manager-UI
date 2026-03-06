import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  imports: [],
  templateUrl: './forgotpassword.html',
  styleUrl: './forgotpassword.css'
})
export class Forgotpassword {

  constructor(private route: Router){}

  Done(){
    this.route.navigate(['/']);
  }

}

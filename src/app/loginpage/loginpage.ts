import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [CommonModule,FormsModule],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.css'
})
export class Loginpage {
rememberMe: any;

  constructor(private route: Router){}

  username: string = '';
  password: string = '';
  
  login() {
    const uname = this.username.trim();
    const pwd = this.password.trim();

    if (!uname || !pwd) {
      alert('Please enter both username and password.');
    } else if (uname === 'admin' && pwd === 'admin') {
      alert('Logged in Successfully');
      localStorage.setItem('loggedIn', 'true');
      this.route.navigate(['/list']);
    }
    else{
      alert('Invalid Credentials');
    }
  }

  forgot(){
    this.route.navigate(['/forgot']);
  }
}

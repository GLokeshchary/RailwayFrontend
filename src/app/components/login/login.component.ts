import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login:Login=new Login();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.login);
    if ((this.login.username!="" && this.login.password!="") && (this.login.username!=null && this.login.password!=null)) {
      
    }
    
  }
}

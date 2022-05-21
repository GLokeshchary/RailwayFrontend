import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  home(){
    this.router.navigate(['/home']);

  }
  about(){
    this.router.navigate(['/about']);
  }
  ContactUs(){
    this.router.navigate(['/contact']);

  }
  search(){
    this.router.navigate(['/search']);
  }
  BookedTickets(){
this.router.navigate(['/checkTickets']);
  }
  FAQ(){
    this.router.navigate(['/faq']);
  }
  cancel(){
    this.router.navigate(['/cancel']);
  }
  help(){
    
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name:any;
  email:any;
  subject:any;
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(contactForm:any){
    console.log(contactForm.value);
    
  }

}

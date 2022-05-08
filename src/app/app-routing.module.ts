import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookSLComponent } from './components/book-sl/book-sl.component';
import { BookedTicketsComponent } from './components/booked-tickets/booked-tickets.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"bookSL/:trainNo",component:BookSLComponent},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"bookedTickets",component:BookedTicketsComponent},
  {path:"about",component:AboutComponent},
  {path:"admin",component:AdminComponent},
  {path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

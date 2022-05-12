import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddTrainComponent } from './components/add-train/add-train.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookSLComponent } from './components/book-sl/book-sl.component';
import { BookedTicketsComponent } from './components/booked-tickets/booked-tickets.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TrainListComponent } from './components/train-list/train-list.component';

const routes: Routes = [
  {path:"bookSL/:trainNo",component:BookSLComponent},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"bookedTickets",component:BookedTicketsComponent},
  {path:"about",component:AboutComponent},
  {path:"admin",component:AdminComponent},
  {path:"login",component:LoginComponent},
  {path:"admindashboard",component:AdminDashboardComponent,children:[{path:"createtrain",component:AddTrainComponent},
                                                                     {path:"Trainlist",component:TrainListComponent}]},
  {path:"faq",component:FaqComponent},
  {path:"footer",component:FooterComponent},
  {path:"navbar",component:NavbarComponent},
  {path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

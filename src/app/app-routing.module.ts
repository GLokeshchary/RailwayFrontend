import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './components/about/about.component';
import { AddTrainComponent } from './components/add-train/add-train.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookAc1Component } from './components/book-ac1/book-ac1.component';
import { BookAc2Component } from './components/book-ac2/book-ac2.component';
import { BookAc3Component } from './components/book-ac3/book-ac3.component';
import { BookSLComponent } from './components/book-sl/book-sl.component';
import { BookSsComponent } from './components/book-ss/book-ss.component';
import { BookedTicketsComponent } from './components/booked-tickets/booked-tickets.component';
import { CheckticketsComponent } from './components/checktickets/checktickets.component';
import { ContactComponent } from './components/contact/contact.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { TrainListComponent } from './components/train-list/train-list.component';
import { UpdatepassengerComponent } from './components/updatepassenger/updatepassenger.component';
import { UpdatetrainComponent } from './components/updatetrain/updatetrain.component';

const routes: Routes = [
  {path:"search/:start/:end",component:SearchComponent},
  {path:"register",component:RegisterComponent},
  {path:"bookSL/:trainNo",component:BookSLComponent},
  {path:"bookAC1/:trainNo",component:BookAc1Component},
  {path:"bookAC2/:trainNo",component:BookAc2Component},
  {path:"bookAC3/:trainNo",component:BookAc3Component},
  {path:"bookSS/:trainNo",component:BookSsComponent},
  {path:"home",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"bookedTickets",component:BookedTicketsComponent},
  {path:"about",component:AboutComponent},
  {path:"admin",component:AdminComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent},
  {path:"admindashboard",component:AdminDashboardComponent,children:[{path:"createtrain",component:AddTrainComponent},
                                                                     {path:"Trainlist",component:TrainListComponent}]},
  {path:"faq",component:FaqComponent},
  {path:"updatePassenger/:id",component:UpdatepassengerComponent},
  {path:"updateTrain/:trainNo",component:UpdatetrainComponent},
  {path:"checkTickets",component:CheckticketsComponent},
  {path:"footer",component:FooterComponent},
  {path:"payment/:trainNo/:coach/:totalamount",component:PaymentComponent},
  {path:"navbar",component:NavbarComponent},
  
  {path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

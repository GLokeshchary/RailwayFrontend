import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookedTicketsComponent } from './components/booked-tickets/booked-tickets.component';
import { AboutComponent } from './components/about/about.component';
import { AdminComponent } from './components/admin/admin.component';
import { BookSLComponent } from './components/book-sl/book-sl.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AddTrainComponent } from './components/add-train/add-train.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TrainListComponent } from './components/train-list/train-list.component';
import { BookAc3Component } from './components/book-ac3/book-ac3.component';
import { BookAc2Component } from './components/book-ac2/book-ac2.component';
import { BookAc1Component } from './components/book-ac1/book-ac1.component';
import { BookSsComponent } from './components/book-ss/book-ss.component';
import {MatRadioModule} from '@angular/material/radio';
import { UpdatepassengerComponent } from './components/updatepassenger/updatepassenger.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SearchComponent } from './components/search/search.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    BookedTicketsComponent,
    AboutComponent,
    AdminComponent,
    BookSLComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminDashboardComponent,
    AddTrainComponent,
    FaqComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    TrainListComponent,
    BookAc3Component,
    BookAc2Component,
    BookAc1Component,
    BookSsComponent,
    UpdatepassengerComponent,
    PaymentComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

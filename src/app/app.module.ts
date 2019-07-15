import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

// components
import { PassengerModule } from './passenger/passenger.module';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

// Services
import {passengerServiceDashboard} from './passenger/passenger.service';
import { PassengerViewerComponent } from './passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from './passenger-form/passenger-form.component'

const routes: Routes =[
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    PassengerModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [passengerServiceDashboard],
  bootstrap: [AppComponent]
})
export class AppModule { }

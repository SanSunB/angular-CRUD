import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

// components
import { PassengerComponent } from './passenger.component';
import { PassengerDetailsComponent } from '../passenger-details/passenger-details.component';
import { PassengerCountComponent } from '../passenger-count/passenger-count.component';
import { PassengerViewerComponent } from '../passenger-viewer/passenger-viewer.component';
import { PassengerFormComponent } from '../passenger-form/passenger-form.component'


// Services
import {passengerServiceDashboard} from './passenger.service';

const routes: Routes =[
  {path: 'passengers',
  children: [{path: '', component: PassengerComponent},
  {path: ':id', component: PassengerViewerComponent}]
  }];

@NgModule({
  declarations: [
    PassengerComponent,
    PassengerDetailsComponent,
    PassengerCountComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [passengerServiceDashboard],
})
export class PassengerModule { }

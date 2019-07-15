import { Component, OnInit } from '@angular/core';

import {passengerServiceDashboard} from '../passenger/passenger.service'
import {Passenger} from '../passenger/models/passenger.interface'
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-passenger-viewer',
  styleUrls: ['./passenger-viewer.component.css'],
  template: `
  <div>
    <button (click)="goBack()">
    <<  Go back
    </button>
   <app-passenger-form
   [detail]="passenger"
   (update)="onUpdatePassenger($event)">
   </app-passenger-form>
  </div>
  `
})
export class PassengerViewerComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private passengerService : passengerServiceDashboard) { }
    passenger :Passenger;

  ngOnInit() {
    // switchMap return the service observable with the params from the route
    this.route.params.switchMap((data: Passenger) =>
     this.passengerService.getPassenger(data.id))
     .subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdatePassenger(event: Passenger){
    this.passengerService.updatePassenger(event)
        .subscribe((data : Passenger) =>{
        this.passenger = Object.assign({},this.passenger, event)});
  }

  goBack(){
    // Use the router to go back to calling screen
    this.router.navigate(['/passengers']);
    console.log(this.passenger);
  }
}

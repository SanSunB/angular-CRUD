import { Component, OnInit } from '@angular/core';
import { Passenger } from './models/passenger.interface';
import {passengerServiceDashboard} from './passenger.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passenger',
  styleUrls: ['./passenger.component.css'],
  template: `
  <section>
    <div class="sticky">
     <h1>Airline passengers page</h1>
      <app-passenger-count
      [items]="passengers">
      </app-passenger-count>
    </div>
    <div class="content">
    <h3> Current passengers names </h3>
    <!-- Show all the data is updated in the smart component -->
    <table>
      <tr>
        <th> Name</th>
        <th> Checked in? </th>
      </tr>
      <tr *ngFor="let passenger of passengers">

        <td>
          {{ passenger.name}}
        </td>
        <td >
        <div class="status"
        [ngClass]="{
          'checked-in': passenger.checkedIn,
          'checked-out': !passenger.checkedIn
        }">
          {{ passenger.checkedIn ? 'Yes' : 'No'}}
        </div>
        </td>
      </tr>
    </table>
    <div>
      <app-passenger-details
      *ngFor="let passenger of passengers"
      [detail]="passenger"
      (remove)="handleRemove($event)"
      (view)="handleView($event)"
      (edit)="handleEdit($event)">
      </app-passenger-details>
    </div>
    </div>
  </section>
  `
})
export class PassengerComponent implements OnInit {

  passengers: Passenger[];
  constructor(
    private router: Router,
    private passengerService : passengerServiceDashboard){}
  ngOnInit() {
    this.passengerService.getPassengers()
    .subscribe((data : Passenger[]) =>this.passengers = data);
  }

  handleRemove(event: Passenger){
    this.passengerService.removePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.filter((passenger: Passenger) =>{
        return passenger.id != event.id;
      });
    });
  }
  handleView(event: Passenger){
    // Gp to the url with the user id
    this.router.navigate(['/passengers', event.id])
  }

  handleEdit(event: Passenger){
    this.passengerService.updatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passengers = this.passengers.map((passenger: Passenger) => {
        if (passenger.id === event.id){
          passenger = Object.assign({},passenger,event);
        }
        return passenger;
      });
    });
  }
}

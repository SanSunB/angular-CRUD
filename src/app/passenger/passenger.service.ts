import { Passenger } from './models/passenger.interface'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// json-server db.json
// http://localhost:3000/passengers
const PASSENGER_API = 'http://localhost:3000/passengers';
import 'rxjs/add/operator/map';

@Injectable()
export class passengerServiceDashboard{

  constructor(private http: Http){}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSENGER_API).
    map((response: Response) => response.json());
  }

  getPassenger(id : number): Observable<Passenger> {
    return this.http.get(`${PASSENGER_API}/${id}`).
    map((response: Response) => response.json());
  }

  updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.
    put(`${PASSENGER_API}/${passenger.id}`, passenger).
    map((response: Response) => response.json());
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http.
    delete(`${PASSENGER_API}/${passenger.id}`)
    .map((response: Response) => response.json());
  }
}

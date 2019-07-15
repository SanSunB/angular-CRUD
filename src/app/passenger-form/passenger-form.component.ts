import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

import { Passenger} from '../passenger/models/passenger.interface';
import { Baggage } from '../passenger/models/baggage.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['./passenger-form.component.css'],
  template:
  `<form #form="ngForm"
    (ngSubmit)="handleSubmit(form.value, form.valid)"
    novalidate>
    <div>
      Passenger name: <input
      type="text"
      name="name"
      required
      #name="ngModel"
      [ngModel]="detail?.name">
      <div *ngIf="name.errors?.required && name.dirty" class="error">
        Passenger name cannot be empty
      </div>
    </div>
    <div>
      Passenger id: <input
      type="number"
      name="id"
      [ngModel]="detail?.id">
  </div>
  <div>
    Checked in status :
    <!--
    <label>
      Yes <input
      type="radio"
      name="checkedIn"
      [value]="true"
      [ngModel]="detail?.checkedIn"
      (ngModelChange)="toggleRadio($event)">
    </label>
    <label>
      No <input
      type="radio"
      name="checkedIn"
      [value]="false"
      [ngModel]="detail?.checkedIn"
      (ngModelChange)="toggleRadio($event)">
    </label>
    -->
    <input
      type="checkbox"
      name="checkedIn"
      [ngModel]="detail?.checkedIn"
      (ngModelChange)="toggleRadio($event)">
    </div>
    <div *ngIf="form.value.checkedIn">
      Cecked in date: <input
      type="text"
      name="checkedInDate"
      [ngModel]="detail?.checkedInDate ">
    </div>
    <div>
      Baggage:
      <select name="baggage" [ngModel]="detail?.baggage">
        <option *ngFor="let item of baggage"
        [ngValue]="item.key">
          {{item.value}}
        </option>
      </select>
    </div>

    <button tupe="submit" [disabled]="form.invalid">
      Update passenger
    </button>
  </form>
  `
})
export class PassengerFormComponent implements OnInit {

  @Input() detail: Passenger

  @Output()
  update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [{
      key: 'none',
      value: 'No baggage'
    },{
      key: 'hand-only',
      value: 'Hand baggage'
    },{
      key: 'hold-only',
      value: 'Hold baggage'
    },{
      key: 'hand-hold',
      value: 'Hand and hold baggage'
    }];


  ngOnInit() {
  }
  toggleRadio(checkedIn: boolean){
      if(checkedIn){
        this.detail.checkedInDate = Date.now();
      }
  }

  handleSubmit(passenger: Passenger, isValid: boolean){
    if(isValid){
      this.update.emit(passenger)
    }
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../passenger/models/passenger.interface';

@Component({
  selector: 'app-passenger-details',
  styleUrls: ['./passenger-details.component.css'],
  template: `
    <section>
        <p *ngIf="!editing">name: {{detail.name}}</p>
        <p *ngIf="editing">
        <input type="text"
        [value]="detail.name"
        (input)="nameChange(dname.value)"
        #dname></p>
        <p>id : {{detail.id}} </p>
        <p>Check in status : {{ detail.checkedIn ? 'Yes' : 'No'}}
        </p>
        <button (click)="onUpdateClick()">
          {{editing ? 'Done' : 'Edit'}}
        </button>
        <button (click)="onRemoveClick()"> Remove </button>
        <button (click)="onViewClick()"> View all</button>
    </section>
  `
})
export class PassengerDetailsComponent implements OnInit {
  editing: boolean = false;

  @Input() detail: Passenger;

  @Output() remove: EventEmitter<Passenger> = new EventEmitter();

  @Output() edit: EventEmitter<Passenger> = new EventEmitter();

  @Output() view: EventEmitter<Passenger> = new EventEmitter();

  onUpdateClick(){
    if (this.editing){
      //this.detail.name = name;
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
    console.log("OnUpdateClick");
  }

  onRemoveClick(){
    this.remove.emit(this.detail);
  }

  onViewClick(){
    this.view.emit(this.detail);
  }

  ngOnInit() {
    console.log("ngOnInit");
    }

    nameChange(dname: string){
      this.detail.name = dname;
    }
}

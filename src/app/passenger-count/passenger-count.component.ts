import { Component, OnInit, Input } from '@angular/core';
import { Passenger} from '../passenger/models/passenger.interface'

@Component({
  selector: 'app-passenger-count',
  styleUrls: ['./passenger-count.component.css'],
  template: `
  <div>
    <h4> Total Number of passengers : {{items?.length}}</h4>
  </div>
  `

})
export class PassengerCountComponent implements OnInit {
  @Input()
  items: Passenger[];

  ngOnInit() {
  }

}

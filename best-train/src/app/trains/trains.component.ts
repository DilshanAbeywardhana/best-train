import { Component, OnInit } from '@angular/core';
import { trains } from 'src/DataModel/trains.model';
import { filter } from 'minimatch';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {
  train:trains[]=[];
  startpoint:string;
  constructor() { }

  ngOnInit() {
    this.train = [
      {
        "id":1,
        "trainId":"1",
        "trainName":"Sagarika",
        "startpoint":"Fort",
        "destinationpoint":"Matara",
        "time":"9:00am"
      },
      {
        "id":2,
        "trainId":"2",
        "trainName":"Ruhuna",
        "startpoint":"Galle",
        "destinationpoint":"Beliatta",
        "time":"11:00 am"
      }
    ];
  }

  Search(){
    this.train = this.train.filter(res=>{
      return res.startpoint.toLowerCase().match(this.startpoint.toLowerCase());
    });
  }

}

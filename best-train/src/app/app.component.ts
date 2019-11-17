import { Component, OnInit } from '@angular/core';
import {trains} from '../../src/DataModel/trains.model';
import{ Todo } from "./todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  startpoint:string;
  destinationpoint:string;
  trainName:string;
  time:string;
  train: trains[]= [];
  constructor(){}
  title = 'Sandun-ng';

  todoValue:string;
  list:Todo[

  ];

  ngOnInit(){

    this.list =[];
    this.todoValue="";
    this.startpoint="";
    this.destinationpoint="";
    this.time="";
    this.trainName="";
  }

  _onAddItemPressed(){
    if(this.todoValue !==null){
      const newItem :Todo={
        trainName:this.trainName,
        startpoint:this.startpoint,
        destinationpoint:this.destinationpoint,
        time:this.time,
      };
      this.list.push(newItem);
    }
    this.todoValue ="";
  }

}



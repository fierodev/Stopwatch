import { Component, OnInit } from '@angular/core';
import { timer, interval, Observable } from 'rxjs';
import { map, bufferTime, filter, finalize, debounceTime, timeout, skipWhile, take, repeat, retry, buffer, mapTo, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css']
})
export class WatchComponent implements OnInit {
  seconds = 0;
  minutes = 0;
  interval: any;
  stopFlag = true;
  timer : any;
  data: number = 0;
  public dblcount: any = 0;
  public snglcount: any = 0;
  public message:string="Waiting for a click...";

  startStopClick() {
    if (this.stopFlag === true) { 
      this.startTimer();
      this.stopFlag = false;
    } else {
      this.stopTimer();
      this.seconds = 0;
      this.minutes =0;
      this.stopFlag = true
    }
}
  startTimer() {
      this.timer = timer(0, 1000).subscribe(t => {
      if (this.seconds < 59) {
        this.seconds++;
      }else{
        this.seconds = 0;
        this.minutes++;
        };
    })
  }
  stopTimer() {
    this.timer.unsubscribe();
  }
  waitTimer() {
    this.stopFlag = true
    this.timer.unsubscribe(); 
  }
  resetTimer() {
    this.timer.unsubscribe();
    this.seconds = 0;
    this.minutes = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }
}

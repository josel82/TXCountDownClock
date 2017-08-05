import { Component, OnInit } from '@angular/core';
import { CounterService } from './shared/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CounterService]
})
export class AppComponent implements OnInit{

  time = {
    hours : '00',
    minutes : '00',
    seconds : '00'
  }

  constructor(private counterService: CounterService){}

  ngOnInit(){
    this.time = this.counterService.time;
  }




}

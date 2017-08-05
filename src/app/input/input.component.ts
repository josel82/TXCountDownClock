import { Component, ViewChild, ElementRef } from '@angular/core';

import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent{
  @ViewChild('hour') hours : ElementRef;
  @ViewChild('min') mins : ElementRef;
  @ViewChild('sec') secs : ElementRef;

  constructor(private counterService: CounterService) { }


  onStartCount(h,m,s){
    this.counterService.setCounter([h.value,m.value,s.value]);
  }

  onClearCount(){
    this.counterService.onClear();
    this.hours.nativeElement.value = '00';
    this.mins.nativeElement.value = '00';
    this.secs.nativeElement.value = '00';
  }
}

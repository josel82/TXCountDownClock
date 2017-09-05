import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{

  timeForm: FormGroup;


  constructor(private counterService: CounterService) { }

  ngOnInit(){
    this.timeForm = new FormGroup({
      'hours' : new FormControl(null, [Validators.required]),
      'minutes': new FormControl(null, [Validators.required]),
      'seconds': new FormControl(null, [Validators.required])
    });
  }
  onStartCount(){
    let h = this.timeForm.controls.hours.value;
    let m = this.timeForm.controls.minutes.value;
    let s = this.timeForm.controls.seconds.value;
    if(!h || !m || !s){
      alert('Please fill in all fields!');
    }else{
      let targetTime = new Date();
      targetTime.setHours = h;
      targetTime.setMinutes = m;
      targetTime.setSeconds = s;
      this.counterService.setCounter(targetTime);
    }

  }

  onClearCount(){
    this.counterService.onClear();
    this.timeForm.patchValue({
      'hours':'',
      'minutes':'',
      'seconds':''
    });
  }
}

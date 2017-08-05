import { Component } from '@angular/core';

import { CounterService } from '../shared/counter.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  timeOutput: string[] = ['00','00','00'];
  isOnAir: boolean = false;

  constructor(private counterService: CounterService) {
    this.counterService.timeUpdated.subscribe((time)=>{
      this.timeOutput = time;
    });
    this.counterService.flag.subscribe((flag)=>{
      this.isOnAir = flag;
    })
  }


}

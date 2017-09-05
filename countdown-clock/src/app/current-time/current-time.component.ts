import { Component, OnInit } from '@angular/core';
import { CounterService } from "app/shared/counter.service";



@Component({
  selector: 'app-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.css']
})
export class CurrentTimeComponent implements OnInit {

  time = {
    hours : '00',
    minutes : '00',
    seconds : '00'
  }
  cntDwn:Object = {
    hour:'00',
    min:'00',
    sec:'00'
  }
  onAir=false;

  constructor(private counterService: CounterService) { }

  ngOnInit() {

    let toggle:any;

    this.time = this.counterService.time;

    this.counterService.flag.subscribe((flag)=>{
      if(flag){
        this.onAir = flag;
        toggle = this.onAirToggle();
      }else{
        this.onAir = flag;
        clearInterval(toggle);
      }
      console.log(flag);
    });

    this.counterService.timeUpdated.subscribe((cntDwn)=>{
      this.cntDwn = cntDwn;
    });
  }

  onAirToggle(){
    return setInterval(()=>{
              this.onAir = !this.onAir
            },1000);
  }




}

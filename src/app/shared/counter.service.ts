import { Subject } from 'rxjs/Subject';

export class CounterService{

  timeUpdated = new Subject<string[]>();
  flag = new Subject<boolean>();
  countingDown = false;
  input;
  time = {
    hours : '00',
    minutes : '00',
    seconds : '00'
  }

  constructor(){}

  getTime(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    return [h,m,s];
  }

  timeEngine = setInterval(()=>{
       let h = this.getTime()[0];
       this.time.hours = h < 10 ? '0'+h.toString(): h.toString();

       let m = this.getTime()[1];
       this.time.minutes = m < 10 ? '0'+m.toString(): m.toString();

       let s = this.getTime()[2];
       this.time.seconds = s < 10 ? '0'+s.toString(): s.toString();
       if(this.countingDown){
         this.diff(this.input,this.getTime());
       }
   }, 1000);

  diff(t2,t1){

    let time2 = (t2[0]*3600000)+(t2[1]*60000)+(t2[2]*1000);
    let time1 = (t1[0]*3600000)+(t1[1]*60000)+(t1[2]*1000);
    let res = time2 - time1;
    if(res <= 0){
       this.flag.next(true);
       this.countingDown = false;
    }

    let h = Math.floor(res/3600000);
    let hour = h < 10 ? '0'+h.toString() : h.toString();
    let m = Math.floor((res%3600000)/60000);
    let min = m < 10 ? '0'+m.toString() : m.toString();
    let s = Math.floor(((res%3600000)%60000)/1000);
    let sec = s < 10 ? '0'+s.toString() : s.toString();

    this.timeUpdated.next([hour,min,sec]);

  }

  setCounter(input){
    this.input = input;
    this.countingDown = true;
  }

  onClear(){
    this.countingDown = false;
    this.flag.next(false);
    this.timeUpdated.next(['00','00','00']);
  }
}

import { Subject } from 'rxjs/Subject';

export class CounterService{

  timeUpdated = new Subject<any>();
  flag = new Subject<boolean>();
  countingDown = false;
  input: Date;
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
    return {h,m,s,date};
  }
  //current time generator
  timeEngine = setInterval(()=>{
       let h = this.getTime().h;
       this.time.hours = h < 10 ? '0'+h.toString(): h.toString();

       let m = this.getTime().m;
       this.time.minutes = m < 10 ? '0'+m.toString(): m.toString();

       let s = this.getTime().s;
       this.time.seconds = s < 10 ? '0'+s.toString(): s.toString();

       //Activates the Countdown clock
       if(this.countingDown){
         this.diff(this.input,this.getTime().date);
       }

   }, 1000);

 //Countdown clock
  diff(t2,t1){

    let res = Math.abs(Math.floor(t2/1000) - Math.floor(t1/1000));
    
    if(res === 0){ //checks if the time is out
       this.flag.next(true); //turns the "On Air" sign on
    }
      //time difference calculation
      let h = Math.floor(res/3600);
      let hour = h < 10 ? '0'+h.toString() : h.toString();
      let m = Math.floor((res%3600000)/60);
      let min = m < 10 ? '0'+m.toString() : m.toString();
      let s = Math.floor((res%3600000)%60000);
      let sec = s < 10 ? '0'+s.toString() : s.toString();
      let time = {
        hour: hour.toString(),
        min: min.toString(),
        sec: sec.toString()
      }
      this.timeUpdated.next(time);
  }

//Called when the start button is clicked
  setCounter(input){
    this.input = input;
    this.countingDown = true;
  }

//Called when the "clear" button is clicked
  onClear(){
    this.countingDown = false;
    this.flag.next(false);
    this.timeUpdated.next({
      hour: '00',
      min: '00',
      sec: '00'
    });
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Tab5Page } from './tab5.page';
import { Component } from '@angular/core';
//import { MbscTimerOptions } from '@mobiscroll/angular';

describe('Tab5Page', () => {
  let component: Tab5Page;
  let fixture: ComponentFixture<Tab5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Tab5Page],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

//   let lapsNr = 1;

// function format(ms) {
//     const minutes = Math.floor(ms / (1000 * 60));
//     const seconds = Math.floor((ms - minutes * 1000 * 60) / 1000);
//     const fract = Math.floor((ms - minutes * 1000 * 60 - seconds * 1000) / 10);

//     return minutes + 'm ' + (seconds < 10 ? '0' : '') + seconds + 's.' + (fract < 10 ? '0' : '') + fract;
// }

// @Component({
//     selector: 'app-root',
//     templateUrl: './app.component.html'
// })
// export class AppComponent {
//     timer: number;
//     timerSettings: MbscTimerOptions = {
//         theme: 'ios',
//         display: 'inline',
//         step: 0.01,
//         rows: 3,
//         mode: 'stopwatch',
//         onReset: () => {
//             document.getElementById('laps').innerHTML = '';
//             lapsNr = 1;
//         },
//         onLap: (event, inst) => {
//             const cont = document.getElementById('laps');
//             const temp = document.createElement('tr');

//             temp.innerHTML = '<td>#' + lapsNr + '</td><td> - ' + format(event.lap) + ' - </td><td>' + format(event.ellapsed) + '</td>';
//             cont.appendChild(temp);

//             lapsNr++;
//         }
//     };
// }

  // it('should create', () => {
  //   expect(component).toBeTruthy();

  //   let countDownDate = new Date("Oct 29, 2018 14:50:25").getTime();

  //   // Update the count down every 1 second
  //   let x = setInterval(function () {

  //     // Get todays date and time
  //     let now = new Date().getTime();

  //     // Find the distance between now and the count down date
  //     let distance = countDownDate - now;
  //     // Time calculations for days, hours, minutes and seconds
  //     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //     console.log(now, "now", "countDownDate", countDownDate, "distance", distance, "days", days);

  //     // Output the result in an element with id="demo"
  //     document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //       + minutes + "m " + seconds + "s ";

  //     // If the count down is over, write some text 
  //     if (distance < 0) {
  //       clearInterval(x);
  //       document.getElementById("demo").innerHTML = "EXPIRED";
  //     }
  //   }, 1000);  
  // });
});

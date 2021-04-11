import CountdownTimer from './countdown_timer';
import './style.scss';

// console.log(CountdownTimer);
new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 27, 2021'),
});

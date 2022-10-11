import { interval, timer } from 'rxjs';

// Accepts duration in milliseconds which is the time between emitted values
const interval$ = interval(1000);

// If you only provide a single argument to subscribe, that function is registered as the 'next' callback
interval$.subscribe(item => console.log('interval$:', item));

// If you need to emit the first value immediately followed by a value every one second
// 0 - delay before the first value submission
// 1000 - interval between every each submission
const timer$ = timer(0, 1000);
timer$.subscribe(item => console.log('timer$:', item));

// If you need to emit a single value and complete after 2 seconds
const oneTimeValue$ = timer(2000);
oneTimeValue$.subscribe(item => console.log('oneTimeValue$', item));

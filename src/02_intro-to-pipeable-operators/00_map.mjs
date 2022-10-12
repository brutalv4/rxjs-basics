import { of } from 'rxjs';
import { map } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

// 'map' allows you to transform the stream of values using a projection function
// If you need to multiply emitted values by 10
const multipliedBy10$ = numbers$.pipe(map(value => value * 10));
multipliedBy10$.subscribe(console.log);

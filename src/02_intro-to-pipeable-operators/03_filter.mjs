import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

// 'filter' emits only the values based on the values returned by the predicate function
// If you need to multiply emitted values by 10 and get only values greater than 20
const multipliedBy10$ = numbers$.pipe(map(value => value * 10));
const greaterThanTwenty$ = multipliedBy10$.pipe(filter(value => value > 20));
greaterThanTwenty$.subscribe(console.log);

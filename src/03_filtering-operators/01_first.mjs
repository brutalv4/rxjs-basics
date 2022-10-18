import { of } from 'rxjs';
import { first } from 'rxjs';

const numbers$ = of(1, 2, 3, 4, 5);

const observer = {
    next: console.log,
    complete: () => console.log('Complete!'),
};

/*
 * If you supply no values to first, it is equivalent to take(1).
 */
const firstNumber$ = numbers$.pipe(first());
firstNumber$.subscribe(observer);

/*
 * In this example only 3 will be emitted (just like filter) and then completes
 */
const firstThree$ = numbers$.pipe(first(num => num === 3));
firstThree$.subscribe(observer);

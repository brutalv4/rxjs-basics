import { of } from 'rxjs';
import { takeWhile } from 'rxjs';

const numbers$ = of(1, 2, 3, 4, 5);

const observer = {
    next: console.log,
    complete: () => console.log('Complete!'),
};

/*
 * 'takeWhile' emits values as long as they pass
 * the provided condition. As soon as the predicate
 * returns false, takeWhile completes the observable.
 *
 * You can also pass an optional second parameter of true
 * if you want takeWhile to emit the value that caused
 * your condition to return false, before completing.
 */
const lessThenFive = numbers$.pipe(takeWhile(num => num < 5 /*, true */));
lessThenFive.subscribe(observer);

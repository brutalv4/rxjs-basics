import { takeUntil, timer } from 'rxjs';

const observer = {
    next: console.log,
    complete: () => console.log('Complete!'),
};

const tenSeconds$ = timer(10000);
const interval$ = timer(0, 1000).pipe(
    /*
     * takeUntil lets you complete a stream based
     * on when another stream emits a value.
     */
    takeUntil(tenSeconds$)
);

interval$.subscribe(observer);
tenSeconds$.subscribe(observer);

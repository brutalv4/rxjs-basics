import { of } from 'rxjs';
import { take } from 'rxjs';

const numbers$ = of(1, 2, 3, 4, 5);

/*
 * take emits the first x values from the source,
 * then completes. In this case, 1,2,3 will be emitted.
 */
const firstThreeNumbers$ = numbers$.pipe(take(3));
firstThreeNumbers$.subscribe({
    next: console.log,
    complete: () => console.log('Complete!'),
});

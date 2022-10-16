import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const numbers$ = of(1, 2, 3, 4, 5);

// 'tap': void - let you spy on the source observable performing side effects while not impacting the underline stream
const multipliedBy10$ = numbers$.pipe(
    tap(value => console.log('before:', value)),
    map(value => value * 10),
    tap({
        next: value => console.log('after:', value),
        complete: () => console.log('complete!'),
        error: err => console.log('error', err),
    })
);
multipliedBy10$.subscribe(value => console.log('next:', value));

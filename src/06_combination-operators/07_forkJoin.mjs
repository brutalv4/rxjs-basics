import { delay, forkJoin, of } from 'rxjs';

// streams
const numbers$ = of(1, 2, 3);
const letters$ = of('a', 'b', 'c');

/*
 * You can also pass in comma separated arguments and
 * receive an array in return. This is the only option if
 * you are using less than RxJS 6.5
 */
forkJoin(numbers$, letters$.pipe(delay(3000))).subscribe(console.log);
forkJoin([numbers$, letters$]).subscribe(console.log);
forkJoin({ numbers: numbers$, letters: letters$ }).subscribe(console.log);

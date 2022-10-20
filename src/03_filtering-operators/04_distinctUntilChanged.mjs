import { of } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

const numbers$ = of(1, '1', 2, 3, 3, 3, 3, 4, 5, 3);

/*
 * 'distinctUntilChanged' emits unique values based
 * on a === comparison to the last emitted value.
 */
numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

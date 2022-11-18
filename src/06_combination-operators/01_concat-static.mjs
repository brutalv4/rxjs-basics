import { concat, EMPTY, interval } from 'rxjs';
import { delay, take } from 'rxjs/operators';

const interval$ = interval(1000);

/*
 * concat subscribes to each observable in order,
 * subscribing to the next as the previous completes.
 * Like concatMap, you can think of concat based
 * operators as a single file line.
 */
concat(interval$.pipe(take(3)), interval$.pipe(take(2))).subscribe(console.log);

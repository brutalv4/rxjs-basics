import { from, interval } from 'rxjs';
import { scan } from 'rxjs/operators';

const totalReducer = (accumulator, currentValue) => accumulator + currentValue;

const interval$ = interval(1000);

// 'scan' applies a reducer function on each emitted value
// the accumulated value is emitted on each next callback (in contrast to the 'reduce')
const sum$ = interval$.pipe(scan(totalReducer, 0));
sum$.subscribe(console.log);

const userStateChanges = [
    {
        name: 'Brian',
        loggedIn: false,
        token: null,
    },
    {
        name: 'Brian',
        loggedIn: true,
        token: 'abc',
    },
    {
        name: 'Brian',
        loggedIn: true,
        token: '123',
    },
];

// if you need to accumulate some kind of a state over time
const state$ = from(userStateChanges).pipe(
    scan((accumulator, current) => ({ ...accumulator, ...current }), {})
);
state$.subscribe(console.log);

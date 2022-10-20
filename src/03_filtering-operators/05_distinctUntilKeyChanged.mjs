import { from } from 'rxjs';
import {
    distinctUntilChanged,
    distinctUntilKeyChanged,
    map,
    scan,
} from 'rxjs/operators';

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

const state$ = from(userStateChanges).pipe(
    scan((accumulator, current) => ({ ...accumulator, ...current }), {})
);

/*
 * distinctUntilChanged emits unique values based
 * on a === comparison to the last emitted value.
 */
state$
    .pipe(
        map(state => state.name),
        distinctUntilChanged()
    )
    .subscribe(name => console.log(`1. ${name}`));

/*
 * If you need to use a custom comparer, you can
 * pass distinctUntilChanged a comparer function.
 * ex. distinctUntilChanged((prev, curr) => {
 *   return prev.name === curr.name;
 * })
 */
state$
    .pipe(
        distinctUntilChanged((prev, next) => prev.name === next.name),
        map(state => state.name)
    )
    .subscribe(name => console.log(`2. ${name}`));

/*
 * If comparing based on a property you can use
 * the distinctUntilKeyChanged helper operator instead.
 */
state$
    .pipe(
        distinctUntilKeyChanged('name'),
        map(state => state.name)
    )
    .subscribe(name => console.log(`3. ${name}`));

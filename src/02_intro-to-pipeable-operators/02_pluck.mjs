import { of } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

const items$ = of(
    { item: { value: 1 } },
    { item: { value: 2 } },
    { item: { value: 3 } },
    { item: { value: 4 } },
    { item: { value: 5 } }
);

// If you need to extract value by property
const pluckedValue$ = items$.pipe(pluck('item', 'value'));
pluckedValue$.subscribe(value => console.log('pluckedValue$', value));

// @deprecated — Use map and optional chaining: pluck('foo', 'bar') is map(x => x?.foo?.bar). Will be removed in v8.
const mappedValue$ = items$.pipe(map(item => item?.item?.value));
mappedValue$.subscribe(item => console.log('mappedValue$:', item));

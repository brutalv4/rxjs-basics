import { of } from 'rxjs';
import { mapTo } from 'rxjs/operators';

const items$ = of(
    { item: { value: 1 } },
    { item: { value: 2 } },
    { item: { value: 3 } },
    { item: { value: 4 } },
    { item: { value: 5 } }
);

// If you want to always map to a specific value no matter the emission from the source
const mappedTo$ = items$.pipe(mapTo('Static value!'));
mappedTo$.subscribe(value => console.log('mappedTo$', value));

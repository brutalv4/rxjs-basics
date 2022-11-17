import { of } from 'rxjs';
import { endWith, startWith } from 'rxjs/operators';

const numbers$ = of(1, 2, 3);

numbers$
    .pipe(
        /*
         * startWith lets you seed a stream with 1:M values.
         * On subscription, these values will be emitted
         * immediately, followed by any future values from
         * the source.
         */
        startWith('a', 'b', 'c'),
        /*
         * You can also end a stream with any number of values,
         * emitted on completion with endWith
         */
        endWith('x', 'y', 'z')
    )
    .subscribe(console.log);

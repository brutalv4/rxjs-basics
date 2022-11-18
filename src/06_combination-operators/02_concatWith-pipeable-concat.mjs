import { EMPTY } from 'rxjs';
import { concat, delay, startWith } from 'rxjs/operators';

const delayed$ = EMPTY.pipe(delay(1000));

/*
 * There is also a pipeable operator version that can
 * be used to add observables to a pre-existing stream
 * on completion. This version is used far less than
 * static version, but is available if needed.
 */
/*
 * On top of ordering requests, like we saw in the
 * concatMap lesson, concat can also be used for some
 * interesting UI scenarios such as ordering
 * messaging or animations.
 */
delayed$
    .pipe(
        /*
         * deprecated and not working as expected,
         * simply completes without calling the pipe with delay
         */
        concat(
            delayed$.pipe(startWith('3...')),
            delayed$.pipe(startWith('2...')),
            delayed$.pipe(startWith('1...')),
            delayed$.pipe(startWith('Go!'))
        ),
        startWith('Get Ready!')
    )
    .subscribe(console.log);

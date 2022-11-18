(function ({
    interval,
    fromEvent,
    merge,
    EMPTY,
    operators: { scan, mapTo, takeWhile, tap, startWith, switchMap },
}) {
    const COUNTDOWN_FROM = 10;

    // elem refs
    const countdown = document.getElementById('countdown');
    const message = document.getElementById('message');
    const pauseButton = document.getElementById('pause');
    const startButton = document.getElementById('start');

    // helpers
    function render(count) {
        countdown.innerHTML = count;

        if (count === 0) {
            message.innerHTML = 'Liftoff!';
        }
    }

    // streams
    const counter$ = interval(1000);
    const pauseClick$ = fromEvent(pauseButton, 'click');
    const startClick$ = fromEvent(startButton, 'click');

    merge(startClick$.pipe(mapTo(true)), pauseClick$.pipe(mapTo(false)))
        .pipe(
            /*
             * Depending on whether start or pause was clicked,
             * we'll either switch to the interval observable,
             * or to an empty observable which will act as a pause.
             */
            switchMap(shouldStart => {
                return shouldStart ? counter$ : EMPTY;
            }),
            mapTo(1),
            scan((accumulator, one) => accumulator - one, COUNTDOWN_FROM),
            tap(console.log),
            takeWhile(value => value > 0, true),
            /*
             * With startWith, we can seed the stream with
             * the starting countdown value.
             */
            startWith(COUNTDOWN_FROM)
        )
        .subscribe(render);
})(rxjs);

(function ({
    interval,
    fromEvent,
    operators: { scan, mapTo, takeWhile, tap, takeUntil, startWith },
}) {
    const COUNTDOWN_FROM = 10;

    // elements
    const countdownEl = document.querySelector('#countdown');
    const messageEl = document.querySelector('#message');
    const abortBtn = document.querySelector('#abort');

    // helpers
    function render(count) {
        countdownEl.innerHTML = count;

        if (count === 0) {
            messageEl.innerHTML = 'Liftoff!';
        }
    }

    // streams
    const abortClick$ = fromEvent(abortBtn, 'click');
    const counter$ = interval(1000);
    counter$
        .pipe(
            mapTo(1),
            scan((accumulator, one) => accumulator - one, COUNTDOWN_FROM),
            tap(console.log),
            takeWhile(value => value > 0, true),
            takeUntil(abortClick$),
            /*
             * With startWith, we can seed the stream with
             * the starting countdown value.
             */
            startWith(COUNTDOWN_FROM)
        )
        .subscribe(render);
})(rxjs);

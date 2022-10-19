(function ({ interval, operators: { scan, mapTo, takeWhile, tap } }) {
    // elements
    const countdownEl = document.querySelector('#countdown');
    const messageEl = document.querySelector('#message');

    // helpers
    function updateCounter(count) {
        countdownEl.innerHTML = count;
    }

    function updateMessage() {
        messageEl.innerHTML = 'Liftoff!';
    }

    // streams
    const counter$ = interval(1000);
    counter$
        .pipe(
            mapTo(1),
            scan((accumulator, one) => accumulator - one, 10),
            tap(console.log),
            takeWhile(value => value > 0, true)
        )
        .subscribe({ next: updateCounter, complete: updateMessage });
})(rxjs);

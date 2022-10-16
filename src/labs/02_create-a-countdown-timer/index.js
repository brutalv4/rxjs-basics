(function ({ interval, operators: { scan, mapTo, filter } }) {
    // elements
    const countdownEl = document.querySelector('#countdown');
    const messageEl = document.querySelector('#message');

    // helpers
    function render(count) {
        countdownEl.innerHTML = count;

        if (count === 0) {
            messageEl.innerHTML = 'Liftoff!';
        }
    }

    // streams
    const counter$ = interval(1000);
    counter$
        .pipe(
            mapTo(1),
            scan((accumulator, one) => accumulator - one, 10),
            filter(value => value >= 0)
        )
        .subscribe(render);
})(rxjs);

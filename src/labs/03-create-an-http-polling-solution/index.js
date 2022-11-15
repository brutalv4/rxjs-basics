(function ({
    fromEvent,
    timer,
    operators: { exhaustMap, takeUntil, tap, finalize, switchMapTo, pluck },
    ajax: { ajax },
}) {
    // elements
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const pollingStatus = document.getElementById('polling-status');
    const dogImage = document.getElementById('dog');

    // streams
    const startClick$ = fromEvent(startButton, 'click');
    const stopClick$ = fromEvent(stopButton, 'click');

    startClick$
        .pipe(
            /* map to interval
             * exhaustMap to ignore subsequent start polling clicks
             * (to ignore other streams while single timer stream is running)
             */
            exhaustMap(() =>
                timer(0, 5000).pipe(
                    tap(() => (pollingStatus.innerHTML = 'Started')),
                    switchMapTo(
                        ajax
                            .getJSON('https://random.dog/woof.json')
                            .pipe(pluck('url'))
                    ),
                    takeUntil(stopClick$),
                    finalize(() => (pollingStatus.innerHTML = 'Stopped'))
                )
            )
        )
        .subscribe(url => (dogImage.src = url));
})(rxjs);

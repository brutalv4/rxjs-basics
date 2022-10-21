(function ({
    fromEvent,
    asyncScheduler,
    operators: { map, tap, throttleTime },
}) {
    const THROTTLE_TIME_IN_MS = 30;

    // elements
    const progressBar = document.querySelector('.progress-bar');

    // helpers
    function calculateScrollPercent({ target: { scrollingElement } }) {
        const { scrollTop, scrollHeight, clientHeight } = scrollingElement;
        return (scrollTop / (scrollHeight - clientHeight)) * 100;
    }

    function updateProgressBar(percent) {
        progressBar.style.width = `${percent}%`;
    }

    // streams
    const scroll$ = fromEvent(document, 'scroll');
    const progress$ = scroll$.pipe(
        /*
         * For extremely active streams like scroll events,
         * throttleTime can be used to limit the number of emitted
         * values. In this case, we'll just update our scroll bar every
         * 30ms of scrolling.
         */
        throttleTime(THROTTLE_TIME_IN_MS, asyncScheduler, {
            leading: false,
            trailing: true,
        }),
        map(calculateScrollPercent),
        tap(console.log)
    );

    progress$.subscribe(updateProgressBar);
})(rxjs);

(function ({ fromEvent, operators: { map, tap } }) {
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
    const progress$ = scroll$.pipe(map(calculateScrollPercent));

    progress$.subscribe(updateProgressBar);
})(rxjs);

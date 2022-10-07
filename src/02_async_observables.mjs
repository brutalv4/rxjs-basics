import { Observable } from 'rxjs';

const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete'),
};

const observable = new Observable(subscriber => {
    let count = 0;

    const id = setInterval(() => {
        subscriber.next(count);
        count++;
        subscriber.complete();
    }, 1000);

    // finalizer function, will be called after complete callback
    return () => {
        console.log('clean up');
        clearInterval(id);
    };
});

console.log('before');
observable.subscribe(observer);
console.log('after');

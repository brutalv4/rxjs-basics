import { Observable } from 'rxjs';

const observer = {
    next: value => console.log('next', value),
    error: error => console.log('error', error),
    complete: () => console.log('complete'),
};

const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();

    // These are ignored after completion
    subscriber.next('Hello');
    subscriber.next('World');
});

// Observables are lazy, you have to subscribe
observable.subscribe(observer);

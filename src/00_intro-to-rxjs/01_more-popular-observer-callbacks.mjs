import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {
    subscriber.next('Hello');
    subscriber.next('World');
    subscriber.complete();
});

// Observables are lazy, you have to subscribe
observable.subscribe(value => console.log('next', value));

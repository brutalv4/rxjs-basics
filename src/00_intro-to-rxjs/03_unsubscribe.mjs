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
    }, 1000);

    // finalizer function, will be called after complete callback
    return () => {
        console.log('cleanup');
        clearInterval(id);
    };
});

const subscription = observable.subscribe(observer);
const subscriptionTwo = observable.subscribe(observer);

// subscriptions  can be combined together and unsubscribe with single call
subscription.add(subscriptionTwo);

setTimeout(() => {
    // complete callback won't be called
    subscription.unsubscribe();
}, 3500);

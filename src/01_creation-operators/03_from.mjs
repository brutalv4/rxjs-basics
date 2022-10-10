// 'from' checks for the type of value it receives and emits items in the way that makes the most sense for that item type;
// in the way its like a more intelligent 'of'operator
// Signature: (input, scheduler?)
import { from } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!'),
};

// Array (with the length prop): will loop through emitting the items one by one
const arraySource$ = from([1, 2, 3, 4, 5]);
arraySource$.subscribe(observer);

// String (with the length prop): will emit each character individually
const stringSource$ = from('Hello');
stringSource$.subscribe(observer);

// Promise: will perform request emitting a response to the next callback
const promise = fetch('https://api.github.com/users/octocat');
const promiseSource$ = from(promise);
promiseSource$.subscribe(observer);

function* generatorFn() {
    yield 'Hello';
    yield 'World';
}

// Iterator: will drop into do-while loop emitting yielded values within an iterable before completing
const iterator = generatorFn();
const iteratorSource$ = from(iterator);
iteratorSource$.subscribe(observer);

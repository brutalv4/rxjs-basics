import { of } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!'),
};

// 1. Values are emitted synchronously
// 2. No flattening done on any values you supply (will emit the array and the values inside)
// Signature: (...args: Array)
const source$ = of([1, 2], 3, 4, 5);

source$.subscribe(observer);

// To prove that values emitted synchronously
console.log('Hello');

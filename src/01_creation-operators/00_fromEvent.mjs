import { fromEvent } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete'),
};

// Signature: (target, eventName, options?, selector?)
const source$ = fromEvent(process, 'exit');

source$.subscribe(observer);

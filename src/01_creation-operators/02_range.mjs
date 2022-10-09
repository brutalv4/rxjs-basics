import { range } from 'rxjs';

const observer = {
    next: val => console.log('next', val),
    error: err => console.log('error', err),
    complete: () => console.log('complete!'),
};

const source$ = range(1, 5);

source$.subscribe(observer);

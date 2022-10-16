import { from } from 'rxjs';
import { reduce } from 'rxjs/operators';

const numbers = [1, 2, 3, 4, 5];
const totalReducer = (accumulator, currentValue) => accumulator + currentValue;

const numbers$ = from(numbers);

// 'reduce' applies a reducer function on each emitted value
// the accumulated value is emitted only when the source observable completes
const sum$ = numbers$.pipe(reduce(totalReducer, 0));

sum$.subscribe(console.log);

import { interval, reduce, take } from "rxjs";

const numbers = [1,2,3,4,5];

const totalReducer = (acumulador:number, valorActual:number) => acumulador + valorActual;

const total = numbers.reduce(totalReducer,0);

console.log('total arr',total);


interval(500).pipe(
    take(4),
    reduce( totalReducer)
)
.subscribe( {
    next: value => console.log(value),
    complete: () => console.log('Complete')
});




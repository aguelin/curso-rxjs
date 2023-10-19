import { range, filter, map, from, fromEvent } from "rxjs";

// range(1,10).pipe(
//     filter( value => value % 2 === 1)
// ).subscribe(console.log)

// range(20, 30).pipe(
//     filter((value, i) => {
//         console.log('index', i)
//         return value % 2 === 1;
//     })
// )
// .subscribe(console.log)

interface Personaje {
    tipo:string;
    nombre:string;
}

const personajes:Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

from(personajes).pipe(
    filter(value => value.tipo === 'villano')
).subscribe(console.log)

const keyup$ = fromEvent<KeyboardEvent>(document,'keyup').pipe(
    map( event => event.code),
    filter(key => key === 'Enter')
)

keyup$.subscribe(console.log)


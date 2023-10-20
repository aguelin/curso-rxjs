import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000);
// const click$ = fromEvent(boton,'click');
const click$ = fromEvent(boton,'click').pipe(
    tap( () => console.log('tap antes de skip')),
    skip(1),
    tap( () => console.log('tap despues de skip'))
);


counter$.pipe(
    takeUntil(click$)
)
.subscribe({
    next:value => console.log('next',value),
    complete: () => console.log('complete')
})
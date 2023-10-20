import { first, fromEvent } from "rxjs";

const click$ = fromEvent<MouseEvent>(document,'click');

click$.pipe(
    first<MouseEvent>(event => event.clientY >= 150)
)
.subscribe({
    next: value => console.log('next',value),
    complete: () => console.log('complete')
});

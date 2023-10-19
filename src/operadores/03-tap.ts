import { map, range, tap } from "rxjs";

const numeros$ = range(1,5);

numeros$.pipe(
    tap(x => console.log('antes',x)), //El return no hace nada en el tap
    map(value => value * 10),
    tap({
        next:value => console.log('despues',value),
        complete: () => console.log('Se terminó todo')
    })
)
.subscribe(value => console.log('subs',value));


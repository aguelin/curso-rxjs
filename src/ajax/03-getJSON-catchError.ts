import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbinxx.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const manejaError = (resp:AjaxError) => {
        console.warn('error',resp.message);
        return of({
            ok:false,
            usuarios: []
        })
}

// const obs$ = ajax.getJSON(url).pipe(
//     catchError(manejaError)
// )
// const obs2$ = ajax(url).pipe(
//     catchError(manejaError)
// )

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

obs$.pipe(
    catchError(manejaError)
)
.subscribe({
    next: value => console.log('next:',value),
    error: err => console.log('error:',err),
    complete: () => console.log('Complete')
})
// obs2$.subscribe(data => console.log('ajax',data))
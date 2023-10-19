import { Observable, Observer } from "rxjs";

const observer:Observer<any> = {
    next:value => console.log('next: ',value),
    error: error => console.warn('error: ',error),
    complete: () => console.info('Completado')
}

const obs$ = new Observable<string>(subs => {

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    // Forzar un error

    // const a = undefined;
    // a.nombre = 'Fernando';

    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');

});

obs$.subscribe(observer);

// obs$.subscribe(
//     valor => console.log('next: ',valor),
//     error => console.warn('error: ',error),
//     () => console.log('Completado')
// );
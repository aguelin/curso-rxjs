import { Observable, Observer } from "rxjs";

const observer:Observer<any> = {
    next:value => console.log('next: ',value),
    error: error => console.warn('error: ',error),
    complete: () => console.info('Completado')
}

const intervalo$ = new Observable<number>(subscriber => {

    let cont = 0;

    const interval = setInterval(() => {
        cont++;
        subscriber.next(cont);
        console.log(cont);
    },1000);

    return () => {
        clearInterval(interval);
        console.log('Intervalor destruido')
    }

})

const subscription1 = intervalo$.subscribe(num => console.log('Num: ',num));
const subscription2 = intervalo$.subscribe(num => console.log('Num: ',num));
const subscription3 = intervalo$.subscribe(num => console.log('Num: ',num));

setTimeout(() => {
    subscription1.unsubscribe();
    subscription2.unsubscribe();
    subscription3.unsubscribe();

    console.log("Completado");
}, 3000);





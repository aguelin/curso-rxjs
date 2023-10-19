import { from, map, reduce, scan } from "rxjs";

const numeros = [1,2,3,4,5];

const totalAcumulador = (acc,cur) => acc + cur;

from(numeros).pipe(
    scan(totalAcumulador,0)
)
.subscribe(console.log)

interface User{
    id?:string;
    autenticado?:boolean;
    token?:string;
    edad?:number;
}

const user:User[] = [
    {id:'fher',autenticado:false,token:null},
    {id:'fher',autenticado:true,token:'ABC'},
    {id:'fher',autenticado:true,token:'ABC123'}
];

const state$ = from(user).pipe(
    scan<User>( (acc,cur) => {
        
        return { ...acc, ...cur}
    })
);

const id$ = state$.pipe(
    map(state => state.id)
)

id$.subscribe(console.log)


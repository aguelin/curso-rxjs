import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github-user.interface";
import { GithubUsers } from "../interfaces/github-users.interface";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput,orderList);

const mostrarUsuarios = (usuarios:GithubUser[]) => {

    console.log(usuarios);
    orderList.innerHTML = '';

    for (const usuario of usuarios) {
        
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(usuario.login + '');
        li.append(anchor);

        orderList.append(li);


    }

}


const input$ = fromEvent<KeyboardEvent>(textInput,'keyup');


input$.pipe(
    debounceTime<KeyboardEvent>(500),
    map<KeyboardEvent, string>(v => v.target['value']),
    mergeMap<string,Observable<GithubUsers>>(texto => ajax.getJSON(`https://api.github.com/search/users?q=${ texto }`)),
    map<GithubUsers,GithubUser[]>(v => v['items'])
);//.subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    map(v => v.target['value']),
    switchMap( texto => ajax.getJSON(url+texto))
).subscribe(console.log)
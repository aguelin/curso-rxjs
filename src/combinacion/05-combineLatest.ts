import { combineLatest, fromEvent, map} from "rxjs";

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@email.com';

input2.placeholder = '**********';
input2.type = 'password';

document.querySelector('body').append(input1, input2);

const getInputString = (elem: HTMLElement) =>
    fromEvent<KeyboardEvent>(elem, 'keyup').pipe(
        map(ev => ev.target['value'])
    )

combineLatest(
    getInputString(input1),
    getInputString(input2)
).subscribe(console.log);
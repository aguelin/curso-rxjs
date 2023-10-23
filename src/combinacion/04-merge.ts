import { fromEvent, map, merge } from "rxjs";

const keyup$ = fromEvent(document, 'keyup');
const clcik$ = fromEvent(document, 'click');

merge(keyup$.pipe(
    map(v => v['type'])
),
    clcik$.pipe(
        map(v => v['type'])
    )
).subscribe(console.log);